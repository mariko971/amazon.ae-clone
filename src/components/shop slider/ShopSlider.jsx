import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./ShopSlider.css";
import StarOutlinedIcon from "@material-ui/icons/StarOutlined";

const ShopSlider = ({ categoryData }) => {
  const { category, data } = categoryData;
  console.log(categoryData);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(4);

  const indexOfLastProduct = currentPage * postsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - postsPerPage;
  const currentProducts = data.slice(indexOfFirstProduct, indexOfLastProduct);
  const totalPages = data.length / postsPerPage;
  return (
    <div className="shop_main-products">
      <div className="main-products_header">
        <h2>Best Sellers in {`${category}`}</h2>
        <Link to={"/"}>See more</Link>
        <p>
          Page {currentPage} of {totalPages}
        </p>
      </div>
      <div className="main-products-slide">
        <button
          className="track-back-btn track-btn"
          onClick={() =>
            setCurrentPage(currentPage !== 1 ? currentPage - 1 : totalPages)
          }
        >
          &#10094;
        </button>
        <ul className="products-slide-track">
          {currentProducts.map((item, index) => (
            <li className="slide-item" key={index}>
              <img src={item.imageUrl} alt="product" />
              <a href="/" className="slide-item-description">
                {item.productName}
              </a>
              <div className="slide-item-rating">
                <StarOutlinedIcon id="star-icon" />
                <StarOutlinedIcon id="star-icon" />
                <StarOutlinedIcon id="star-icon" />
                <StarOutlinedIcon id="star-icon" />
                <StarOutlinedIcon id="star-icon" />
              </div>
              <p className="slide-item-price">
                {item.currency} {item.price}
              </p>
            </li>
          ))}
        </ul>
        <button
          className="track-next-btn track-btn"
          onClick={() =>
            setCurrentPage(currentPage !== totalPages ? currentPage + 1 : 1)
          }
        >
          &#10095;
        </button>
      </div>
    </div>
  );
};

export default ShopSlider;
