import React from "react";
import "./Orders.css";

import Order from "./orderComponent/Order";
const Orders = ({ currentUser }) => {
  const {
    cart: { orders },
    shippingInfo: { fullName },
  } = currentUser;
  console.log(orders);
  return (
    <div className="orders-wrapper">
      <div className="orders-container">
        <div className="orders-header">
          <h1>Your orders</h1>
        </div>
        {orders.map((order) => (
          <Order order={order} name={fullName} key={order.orderNumber} />
        ))}
      </div>
    </div>
  );
};

export default Orders;
