import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";

import Home from "./pages/home/Home";
import SignInPage from "./pages/sign-in page/SignInPage";
import SignUp from "./pages/sign-up page/SignUp";
import Cart from "./pages/cart/Cart";
import ShopBestSellers from "./pages/shop/ShopBestSellers/ShopBestSellers";
import ShopMain from "./pages/shop/shopMain/ShopMain";
import ShopItemInfo from "./components/shop-Item-Info/ShopItemInfo";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-in" element={<SignInPage />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/best-sellers" element={<ShopBestSellers />} />
        <Route path="/:category" element={<ShopMain />}></Route>
        <Route path="/:category/:productID" element={<ShopItemInfo />} />
      </Routes>
    </div>
  );
}

export default App;
