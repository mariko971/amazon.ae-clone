import React from "react";
import "./Order.css";

import ItemInOrder from "../itemOrdered/ItemInOrder";
import { formatter } from "../../../components/utils";

const Order = ({ order, name }) => {
  const { orderNumber, orderAmount, orderDate, orderItems } = order;
  return (
    <div className="order-wrapper">
      <div className="order-container">
        <div className="order-header">
          <div className="order-date">
            <span className="order-title">ORDER PLACED</span>
            <span className="order-title-detail">{`${orderDate}`}</span>
          </div>
          <div className="order-total">
            <span className="order-title">TOTAL AMOUNT </span>
            <span className="order-title-detail">{` ${formatter.format(
              orderAmount
            )}`}</span>
          </div>
          <div className="order-shipTo">
            <span className="order-title">SHIP TO </span>
            <span className="order-title-detail">{` ${name}`}</span>
          </div>
          <div className="order-number">ORDER # {` ${orderNumber}`}</div>
        </div>
        <div className="orderItem-wrapper">
          {orderItems.map((item) => (
            <ItemInOrder orderItem={item} key={item.productID} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Order;
