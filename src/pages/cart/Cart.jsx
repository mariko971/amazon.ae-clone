import React from "react";
import "./Cart.css";

import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import { Link } from "react-router-dom";

const Cart = () => {
  return (
    <>
      <Header />
      <div className="cart__container">
        <div className="cart__wrapper">
          {/* render if user is signed out */}
          <div className="cart__empty">
            <div className="cart__empty-wrapper">
              <img
                src="https://m.media-amazon.com/images/G/39/cart/empty/kettle-desaturated._CB424694147_.svg"
                alt="illustration"
              />
              <div className="cart-empty">
                <p>Your Amazon basket is empty</p>
                <a href="!#">Shop today's deals</a>
                <div className="cart-empty__btns">
                  <Link to={"/sign-in"} className="signIn">
                    <>
                      <button className="cart-signIn-btn">
                        Sign in to your account
                      </button>
                    </>
                  </Link>
                  <Link to={"/sign-up"} className="signUp">
                    <>
                      <button className="cart-signUp-btn">Sign up now</button>
                    </>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="cart-footer">
            <p>
              The price and availability of items at Amazon.ae are subject to
              change. The Cart is a temporary place to store a list of your
              items and reflects each item's most recent price.
            </p>
            <p>
              Do you have a gift card or promotional code? We'll ask you to
              enter your claim code when it's time to pay.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Cart;
