import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";

import Home from "./pages/home/Home";
import SignInPage from "./pages/sign-in page/SignInPage";
import SignUp from "./pages/sign-up page/SignUp";
import Cart from "./pages/cart/Cart";
import Shop from "./pages/shop/Shop";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-in" element={<SignInPage />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/shop" element={<Shop />} />
      </Routes>
    </div>
  );
}

export default App;
