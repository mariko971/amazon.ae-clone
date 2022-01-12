import React from "react";
import "./ShopItem.css";
import { Link } from "react-router-dom";

import { starRate } from "../utils";

export const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "AED",
  minimumFractionDigits: 2,
});

const ShopItem = ({ category, item, i }) => {
  console.log(formatter);
  return (
    <div className="category-item" key={i}>
      <Link to={item.productID}>
        <div
          className="category-item-img"
          style={{ backgroundImage: `url(${item.imageUrl})` }}
        ></div>
      </Link>
      <Link to={item.productID}>
        <p className="category-item-description">{item.productDescription}</p>
      </Link>
      <div
        className="category-item-rating"
        style={{ backgroundImage: `url(${starRate(item.rating)})` }}
      ></div>
      <Link to={item.productID}>
        <p className="category-item-price">{formatter.format(item.price)}</p>
      </Link>
    </div>
  );
};

export default ShopItem;
