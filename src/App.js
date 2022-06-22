import React, { useEffect, lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { init, setIsLoading } from "./slices/appSlices";
import { BrowserRouter as Router } from "react-router-dom";

import "./App.css";
import { auth, createCustomerProfile } from "./firebase/firebase.utils";
import { onSnapshot } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";
import { getDataFromDB } from "./firebase/firebase.utils";

import SignInPage from "./pages/sign-in page/SignInPage";
import SignUp from "./pages/sign-up page/SignUp";

import Shipping from "./pages/shipping/Shipping";
import Checkout from "./pages/checkout/Checkout";
import MasterPage from "./pages/MasterPage";
import StripeCheckoutPay from "./pages/checkout/stripe/StripeCheckoutPay";
import SuccessPage from "./pages/checkout/successful/SuccessPage";
import Spinner from "./components/spinner/Spinner";
import { setCurrentUser } from "./slices/appSlices";
import Orders from "./pages/orders/Orders";

const Home = lazy(() => import("./pages/home/Home"));
const ShopBestSellers = lazy(() =>
  import("./pages/shop/ShopBestSellers/ShopBestSellers")
);
const Cart = lazy(() => import("./pages/cart/Cart"));
const ShopMain = lazy(() => import("./pages/shop/shopMain/ShopMain"));
const ShopItemInfo = lazy(() =>
  import("./components/shop-Item-Info/ShopItemInfo")
);

function App() {
  const dispatch = useDispatch();
  // const isLoading = useSelector((state) => state.isLoading);
  const currentUser = useSelector((state) => state.user);
  const isLoading = false;

  useEffect(() => {
    let unsubscribeFromAuth = onAuthStateChanged(auth, async (user) => {
      if (user) {
        const customerRef = await createCustomerProfile(user);
        onSnapshot(customerRef, (snapshot) => {
          const { cart, displayName, email, shippingInfo } = snapshot.data();
          dispatch(
            setCurrentUser({
              id: snapshot.id,
              cart,
              displayName,
              email,
              shippingInfo,
            })
          );
        });
      } else {
        dispatch(setCurrentUser(user));
      }
    });
    return unsubscribeFromAuth;
  }, [dispatch]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await getDataFromDB().then((res) => dispatch(init(res)));
      } catch (error) {
        console.log(error.message);
      }
      dispatch(setIsLoading());
    };
    isLoading && fetchData();
  }, [dispatch, isLoading]);

  return (
    <div className="App">
      {isLoading ? (
        <Spinner />
      ) : (
        <Router>
          <Suspense fallback={<Spinner />}>
            <Routes>
              <Route
                path="/"
                element={
                  <MasterPage ChildPage={Home} currentUser={currentUser} />
                }
              />
              <Route
                path="/best-sellers"
                element={
                  <MasterPage
                    ChildPage={ShopBestSellers}
                    currentUser={currentUser}
                  />
                }
              />
              <Route
                path="/:category"
                element={
                  <MasterPage ChildPage={ShopMain} currentUser={currentUser} />
                }
              />
              <Route
                path="/:category/:productID"
                element={
                  <MasterPage
                    ChildPage={ShopItemInfo}
                    currentUser={currentUser}
                  />
                }
              />
              <Route
                path="/cart"
                element={
                  <MasterPage ChildPage={Cart} currentUser={currentUser} />
                }
              />
              <Route path="/sign-in" element={<SignInPage />} />
              <Route path="/sign-up" element={<SignUp />} />
              <Route
                path="/buy/shipping"
                element={<Shipping currentUser={currentUser} />}
              />
              <Route
                path="/buy/checkout"
                element={<Checkout currentUser={currentUser} />}
              />
              <Route
                path="/pay"
                element={<StripeCheckoutPay currentUser={currentUser} />}
              />
              <Route
                path="/order-placed"
                element={
                  <MasterPage
                    ChildPage={SuccessPage}
                    currentUser={currentUser}
                  />
                }
              />
              <Route
                path="/orders"
                element={
                  <MasterPage ChildPage={Orders} currentUser={currentUser} />
                }
              />
            </Routes>
          </Suspense>
        </Router>
      )}
    </div>
  );
}

export default App;
