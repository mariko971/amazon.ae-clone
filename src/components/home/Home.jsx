import React from "react";
import "./Home.css";

import Header from "../header/Header";
import Products from "../products/Products";
import HomeCarousel from "../slider carousel/HomeCarousel";

const Home = () => {
  return (
    <>
      <Header />
      <div className="home">
        <div className="home__container">
          <HomeCarousel />
        </div>
        <Products />
      </div>
    </>
  );
};

export default Home;
