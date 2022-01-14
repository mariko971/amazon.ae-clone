import React from "react";
import "./Home.css";

import Products from "../../components/products/Products";
import HomeCarousel from "../../components/slider carousel/HomeCarousel";
import SignInSignUp from "../../components/sign-in/SignInSignUp";

const Home = () => {
  return (
    <>
      <div className="home">
        <div className="home__container">
          <HomeCarousel />
        </div>
        <Products />
        <SignInSignUp />
      </div>
    </>
  );
};

export default Home;
