import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./ShopSlider.css";
import { starRate, formatter } from "../utils";

const ShopSlider = ({ categoryData }) => {
  const { category, data } = categoryData;
  const slicedData = data.slice(0, 8);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(4);
  const indexOfLastProduct = currentPage * postsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - postsPerPage;
  const currentProducts = slicedData.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );
  console.log(currentProducts);

  const totalPages = Math.ceil(slicedData.length / postsPerPage);

  return (
    <div className="shop_main-products">
      <div className="main-products_header">
        <h2>Best Sellers in {`${category}`}</h2>
        <Link to={`/${category}`}>See more</Link>
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
              <div
                className="slide-item-img"
                style={{ backgroundImage: `url(${item.imageUrl})` }}
              ></div>
              <a href="/" className="slide-item-description">
                {item.productDescription}
              </a>
              <div
                className="slide-item-rating"
                style={{ backgroundImage: `url(${starRate(item.rating)})` }}
              ></div>
              <p className="slide-item-price">{formatter.format(item.price)}</p>
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
