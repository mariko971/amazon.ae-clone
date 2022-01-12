import React from "react";
import "./ShopBestSellers.css";

import Header from "../../../components/header/Header";
import Footer from "../../../components/footer/Footer";
import ShopSlider from "../../../components/shop slider/ShopSlider";
import { shopData } from "../../../shopData";

const ShopBestSellers = () => {
  return (
    <>
      <Header />
      <div className="shop">
        <div className="shop_main">
          <div className="shop_main-aside">
            <h4 className="aside-header">Any Department</h4>
            <ul className="aside-list">
              <li className="aside-list-item">Mobile Phones</li>
              <li className="aside-list-item">Fashion</li>
              <li className="aside-list-item">Gaming & consoles</li>
              <li className="aside-list-item">Headphones</li>
              <li className="aside-list-item">Speakers</li>
              <li className="aside-list-item">TVs</li>
              <li className="aside-list-item">Tablets</li>
              <li className="aside-list-item">Laptops</li>
            </ul>
          </div>
          <div className="shop-main-main">
            <div className="shop_header">
              <h1>Amazon Best Sellers</h1>
            </div>
            {shopData.map((cat, index) => (
              <ShopSlider categoryData={cat} key={index} />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ShopBestSellers;
