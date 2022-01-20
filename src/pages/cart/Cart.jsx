import React from "react";
import "./Cart.css";

import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import AdByFour from "../../components/ads/ad-1-4/AdByFour";
import CartWithItems from "./CartWithItems";
import { formatter } from "../../components/utils";

const Cart = ({ currentUser }) => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalCartAmount = useSelector((state) => state.cart.totalCartAmount);
  const totalBuyCartQty = useSelector((state) => state.cart.totalBuyCartQty);
  const totalCartItemsQty = useSelector(
    (state) => state.cart.totalCartQuantity
  );
  const promoData = useSelector((state) => state.home.ads_Data.promo);
  const filteredPromoData = promoData.filter((item) => item.type === "byFour");

  const randomArrItem = (items) =>
    items[Math.floor(Math.random() * items.length)];
  const cartPromo = randomArrItem(filteredPromoData);

  return (
    <>
      <div className="cart__container">
        <div className="cart__wrapper">
          {/* render empty if user is signed out or signed in with empty cart */}

          {!currentUser ? (
            <div className="cart__empty">
              <div className="cart__empty-wrapper">
                <img
                  src="https://m.media-amazon.com/images/G/39/cart/empty/kettle-desaturated._CB424694147_.svg"
                  alt="illustration"
                  id="cart__empty-img"
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
                        <button className="cart-signUp-btn">Sign up now</button>
                      </>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ) : currentUser && cartItems.length === 0 ? (
            <div className="cart__empty">
              <div className="cart__empty-wrapper">
                <div className="cart-empty_signedIn">
                  <img
                    src="https://m.media-amazon.com/images/G/39/cart/empty/kettle-desaturated._CB424694147_.svg"
                    alt="illustration"
                    id="cart__empty-img"
                  />
                  <div className="cart-empty_signedIn-txt">
                    <p className="cart-empty_title">
                      Your Amazon basket is empty
                    </p>
                    <p className="cart-empty_txt">
                      Your shopping basket lives to serve. Give it purpose -
                      fill it with groceries, clothing, household supplies,
                      electronics and more.Continue shopping on the Amazon.ae
                      homepage, learn about Today's Deals, or visit your Wish
                      List.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="cart-items">
              <div className="cart-items_header">
                <h2>Shopping Cart</h2>
                <p>Select Items</p>
              </div>
              <p id="cart-items_price">Price</p>
              {cartItems.map((item, i) => (
                <CartWithItems item={item} key={i} />
              ))}
              {totalCartAmount > 0 ? (
                <p className="cart-items_total">
                  {` Subtotal (${totalBuyCartQty} ${
                    totalBuyCartQty > 1 ? "Items" : "Item"
                  }): `}
                  <span id="cart-items_total">
                    {formatter.format(totalCartAmount)}
                  </span>
                </p>
              ) : (
                <p className="cart-items_total">No items selected</p>
              )}
            </div>
          )}

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
        <div className="cart__aside">
          {currentUser && totalCartItemsQty > 0 ? (
            <div className="cart__aside-buy">
              {totalCartAmount > 0 ? (
                <p className="cart-items_total">
                  {` Subtotal (${totalBuyCartQty} ${
                    totalBuyCartQty > 1 ? "Items" : "Item"
                  }): `}
                  <span id="cart-items_total">
                    {formatter.format(totalCartAmount)}
                  </span>
                </p>
              ) : (
                <p className="cart-items_total">No items selected</p>
              )}
              <Link
                to={
                  currentUser.shippingInfo ? "/buy/checkout" : "/buy/shipping"
                }
              >
                <button
                  className="cart__aside-buy-btn"
                  disabled={totalBuyCartQty === 0}
                >
                  Proceed to Buy
                </button>
              </Link>
            </div>
          ) : null}
          <div className="cart-promo_container ad-container">
            <AdByFour
              title={cartPromo.title}
              ads={cartPromo.ads}
              description={cartPromo.description}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
