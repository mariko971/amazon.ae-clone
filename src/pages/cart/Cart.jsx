import React from "react";
import "./Cart.css";

import { Link } from "react-router-dom";

const Cart = ({ currentUser }) => {
  return (
    <>
      {/* <Header /> */}
      <div className="cart__container">
        <div className="cart__wrapper">
          {/* render empty if user is signed out or signed in with empty cart */}
          <div className="cart__empty">
            <div className="cart__empty-wrapper">
              {currentUser ? (
                <div className="cart-empty_signedIn">
                  <p className="cart-empty_title">
                    Your Amazon basket is empty
                  </p>
                  <p className="cart-empty_txt">
                    Your shopping basket lives to serve. Give it purpose – fill
                    it with groceries, clothing, household supplies, electronics
                    and more.
                  </p>
                  <p className="cart-empty_txt">
                    Continue shopping on the Amazon.ae homepage, learn about
                    Today's Deals, or visit your Wish List.
                  </p>
                </div>
              ) : (
                <>
                  <img
                    src="https://m.media-amazon.com/images/G/39/cart/empty/kettle-desaturated._CB424694147_.svg"
                    alt="illustration"
                  />
                  <div className="cart-empty_signInUp">
                    <p className="cart-empty_title">
                      Your Amazon basket is empty
                    </p>
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
                          <button className="cart-signUp-btn">
                            Sign up now
                          </button>
                        </>
                      </Link>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
        <div className="cart-footer">
          <p>
            The price and availability of items at Amazon.ae are subject to
            change. The Cart is a temporary place to store a list of your items
            and reflects each item's most recent price.
          </p>
          <p>
            Do you have a gift card or promotional code? We'll ask you to enter
            your claim code when it's time to pay.
          </p>
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default Cart;
