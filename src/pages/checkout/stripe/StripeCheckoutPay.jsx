import React, { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { useSelector } from "react-redux";

import "./StripeCheckoutPay.css";
import CheckoutForm from "./CheckoutForm";
import { formatter, cart_Amount } from "../../../components/utils";

const stripePromise = loadStripe(
  "pk_test_51JAWf9IdKkYcWqWqgzOffmvGbLVP8cq1cY5wwKHmpzh4Q37gUzpinU3hLhUDkoQsFjO22JHzpcU8bIuyti0NmC5U00xwv9mAvD"
);

function truncate(str) {
  return str.split(" ").length > 10
    ? str.split(" ").slice(0, 10).join(" ") + "..."
    : str;
}

export default function StripeCheckoutPay({ currentUser }) {
  const [clientSecret, setClientSecret] = useState("");
  const buyCart = useSelector((state) => state.buyCart);
  const cartItems = useSelector((state) => state.user.cart.cartItems);
  const totalCartAmount = cart_Amount(buyCart, cartItems);

  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    const { cart } = currentUser;
    const itemsArr = buyCart.map((id) => {
      const item = cart.cartItems.find((prod) => prod.productID === id);
      const { productID, totalAmount } = item;
      return { id: productID, price: totalAmount };
    });
    fetch("/create-payment-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ items: itemsArr }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, []);

  const appearance = {
    theme: "stripe",
  };
  const options = {
    clientSecret,
    appearance,
  };

  return (
    <div className="stripeCheckoutPay-container">
      <div className="stripecheckoutpay">
        <div className="items-to-buy" id="style-1">
          <h1>Buy products</h1>
          {/* display items to be bought on left side */}
          {buyCart.map((id) => {
            const item = cartItems.find((prod) => prod.productID === id);
            return (
              <div className="buyItem" key={item.productID}>
                <div
                  className="buyItem_image"
                  style={{ backgroundImage: `url(${item.imageUrl})` }}
                ></div>
                <div className="buyItem-details">
                  <div className="buyItem_description">
                    {truncate(item.productDescription)}
                  </div>
                  <div className="buyItem-footer">
                    <div className="buyItem_qty">
                      <strong>Qty:</strong> {item.qty}
                    </div>
                    <div className="buyItem_total">
                      <strong>Amount: </strong>{" "}
                      {formatter.format(item.totalAmount)}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="checkoutForm-container">
          {clientSecret && (
            <Elements options={options} stripe={stripePromise}>
              <CheckoutForm id={currentUser.id} />
            </Elements>
          )}
          <div className="cartTotal">
            Total Amount : {formatter.format(totalCartAmount)}
          </div>
        </div>
      </div>
    </div>
  );
}
