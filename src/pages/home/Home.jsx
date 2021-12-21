import React from "react";
import "./Home.css";

import Header from "../../components/header/Header";
import Products from "../../components/products/Products";
import HomeCarousel from "../../components/slider carousel/HomeCarousel";
import SignInSignUp from "../../components/sign-in/SignInSignUp";
import Footer from "../../components/footer/Footer";

const Home = () => {
  return (
    <>
      <Header />
      <div className="home">
        <div className="home__container">
          <HomeCarousel />
        </div>
        <Products />
        <SignInSignUp />
        <Footer />
      </div>
    </>
  );
};

export default Home;
