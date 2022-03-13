import React from "react";
import "./Checkout.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { formatter, cart_Amount } from "../../components/utils";

const Checkout = ({ currentUser }) => {
  const buyCartItems = useSelector((state) => state.buyCart);
  const cartItems = useSelector((state) => state.user.cart.cartItems);
  const totalAmount = cart_Amount(buyCartItems, cartItems);

  const { shippingInfo } = currentUser;
  console.log(buyCartItems);
  return (
    <>
      <div className="checkout-container">
        <div className="checkout-nav">
          <span>
            <Link to={"/cart"}>&#10094; Back</Link>
          </span>
          <Link to={"/"}>
            <img
              id="amazonLogo"
              src="http://pngimg.com/uploads/amazon/amazon_PNG7.png"
              alt="amazon logo"
            />
          </Link>
        </div>
        <div className="checkout-header">
          <h1>Shipping Address</h1>
          {/* <h1>Total Amount</h1> */}
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
        </div>
        <div className="items-to-buy">
          <div className="buyCartItem-header">
            <div className="buyCartItem-title">Product</div>
            <div className="buyCartItem-quantity">Qty</div>
            <div className="buyCartItem-total">Amount</div>
          </div>
          {buyCartItems.map((id) => {
            const item = cartItems.find((prod) => prod.productID === id);
            return (
              <div className="buyCartItem" key={id}>
                <div className="buyCartItem-description">
                  {item.productDescription}
                </div>
                <div className="buyCartItem-qty">{item.qty}</div>
                <div className="buyCartItem-price">
                  {formatter.format(item.totalAmount)}
                </div>
              </div>
            );
          })}
        </div>
        <div className="checkout-amount">
          <h2>Total {formatter.format(totalAmount)}</h2>
        </div>
        <div className="checkout-btn">
          <Link to={"/successPage"}>
            <button className="checkout-btn">Checkout</button>
          </Link>
        </div>
      </div>
      <div className="signIn-copyright-section">
        <span className="signIn-footer-links">
          <a href="/">Conditions of Use</a>
          <a href="/">Privacy Notice</a>
          <a href="/">Help</a>
        </span>
        <p>© 1996-2022, Amazon.com, Inc. or its affiliates</p>
      </div>
    </>
  );
};

export default Checkout;
