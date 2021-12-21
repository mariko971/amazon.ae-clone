import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";

import Home from "./pages/home/Home";
import SignInPage from "./pages/sign-in page/SignInPage";
import Cart from "./pages/cart/Cart";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-in" element={<SignInPage />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
