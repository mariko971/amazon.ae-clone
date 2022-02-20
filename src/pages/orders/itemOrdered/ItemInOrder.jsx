import React from "react";
import "./ItemInOrder.css";
import { Link } from "react-router-dom";

import { truncate } from "../../../components/utils";

const ItemInOrder = ({ orderItem }) => {
  return (
    <div className="itemOrder-wrapper">
      <Link to={orderItem.url}>
        <div
          className="itemOrder-img"
          style={{ backgroundImage: `url(${orderItem.imageUrl})` }}
        ></div>
      </Link>
      <div className="itemOrder-main">
        <Link to={orderItem.url}>
          <div className="itemOrder-description">
            {truncate(orderItem.productDescription)}
          </div>
        </Link>
        <div className="itemOrder-qty">Qty: {` ${orderItem.qty}`}</div>
      </div>
    </div>
  );
};

export default ItemInOrder;
