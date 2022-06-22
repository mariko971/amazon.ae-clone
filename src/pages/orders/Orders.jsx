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
          <h1 className="orders-title">Your orders</h1>
          <p className="orders-shippedTo">Shipped To: {fullName}</p>
        </div>
        {orders.map((order) => (
          <Order order={order} name={fullName} key={order.orderNumber} />
        ))}
      </div>
    </div>
  );
};

export default Orders;
