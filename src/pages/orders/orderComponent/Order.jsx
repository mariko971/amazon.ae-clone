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
            <p className="order-title">ORDER PLACED</p>
            <p className="order-title-detail">{`${orderDate}`}</p>
          </div>
          <div className="order-total">
            <p className="order-title">TOTAL AMOUNT </p>
            <p className="order-title-detail">{` ${formatter.format(
              orderAmount
            )}`}</p>
          </div>
          {/* <div className="order-shipTo">
            <p className="order-title">SHIP TO </p>
            <p className="order-title-detail">{` ${name}`}</p>
          </div> */}
          <div className="order-number">
            <p className="order-title">ORDER#</p>
            <p className="order-title-detail">{` ${orderNumber}`}</p>
            {/* ORDER # {` ${orderNumber}`} */}
          </div>
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
