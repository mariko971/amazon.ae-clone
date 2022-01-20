import React from "react";
import "./Checkout.css";
import StripeCheckoutButton from "./stripe/StripeCheckout";
import { useSelector } from "react-redux";
import { formatter } from "../../components/utils";

const Checkout = ({ currentUser }) => {
  const totalAmount = useSelector((state) => state.cart.totalCartAmount);
  const { shippingInfo } = currentUser;
  console.log(currentUser);
  return (
    <>
      <div className="checkout-container">
        <img
          id="amazonLogo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG7.png"
          alt="amazon logo"
        />
        <div className="checkout-header">
          <h1>Shipping Address</h1>
          <h1>Total Amount</h1>
        </div>
        <div className="checkout-shippingInfo">
          <div className="shippingInfo">
            <strong id="fullName">{shippingInfo.fullName}</strong>
            <p>{shippingInfo.street}</p>
            <p>{shippingInfo.buildingName}</p>
            <p>
              {shippingInfo.city},{shippingInfo.area}
            </p>
            <p>{shippingInfo.country}</p>
            <p>Phone: {shippingInfo.phoneNumber}</p>
          </div>
          <div className="checkout-amount">
            <h2>{formatter.format(totalAmount)}</h2>
          </div>
        </div>
        <div className="checkout-btn">
          <StripeCheckoutButton id="stripeButton" price={totalAmount} />
        </div>
      </div>
      <div className="signIn-copyright-section">
        <span className="signIn-footer-links">
          <a href="/">Conditions of Use</a>
          <a href="/">Privacy Notice</a>
          <a href="/">Help</a>
        </span>
        <p>© 1996-2021, Amazon.com, Inc. or its affiliates</p>
      </div>
    </>
  );
};

export default Checkout;
