import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import { auth, createCustomerProfile } from "./firebase/firebase.utils";
import { onSnapshot } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";

import Home from "./pages/home/Home";
import SignInPage from "./pages/sign-in page/SignInPage";
import SignUp from "./pages/sign-up page/SignUp";
import Cart from "./pages/cart/Cart";
import ShopBestSellers from "./pages/shop/ShopBestSellers/ShopBestSellers";
import ShopMain from "./pages/shop/shopMain/ShopMain";
import ShopItemInfo from "./components/shop-Item-Info/ShopItemInfo";
import Shipping from "./pages/shipping/Shipping";
import Checkout from "./pages/checkout/Checkout";
import MasterPage from "./pages/MasterPage";

function App() {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    let unsubscribeFromAuth = onAuthStateChanged(auth, async (user) => {
      if (user) {
        const customerRef = await createCustomerProfile(user);
        onSnapshot(customerRef, (snapshot) => {
          setCurrentUser({
            id: snapshot.id,
            ...snapshot.data(),
          });
        });
      } else {
        setCurrentUser(user);
      }
    });
    return unsubscribeFromAuth;
  }, []);
  console.log(currentUser);
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={<MasterPage ChildPage={Home} currentUser={currentUser} />}
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
          path="/cart"
          element={<MasterPage ChildPage={Cart} currentUser={currentUser} />}
        />
        <Route
          path="/best-sellers"
          element={
            <MasterPage ChildPage={ShopBestSellers} currentUser={currentUser} />
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
            <MasterPage ChildPage={ShopItemInfo} currentUser={currentUser} />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
