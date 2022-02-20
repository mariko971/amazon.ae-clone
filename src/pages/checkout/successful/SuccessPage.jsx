import React, { useEffect, useRef } from "react";
import "./SuccessPage.css";
import { useSelector, useDispatch } from "react-redux";

import {
  addToFirebaseOrders,
  addToFirebaseCart,
} from "../../../firebase/firebase.utils";
import { handleOrders } from "../../../components/utils";

import { clearBuyCart } from "../../../slices/appSlices";

const SuccessPage = () => {
  const prevValue = useRef([]);
  const dispatch = useDispatch();
  const buyCart = useSelector((state) => state.buyCart);
  const currentUser = useSelector((state) => state.user);
  const {
    cart: { cartItems, orders },
    shippingInfo: { fullName, buildingName, street, city },
    id,
  } = currentUser;

  const { newOrderedItems, newCartItems, newOrders, orderDate } = handleOrders(
    cartItems,
    buyCart,
    id,
    orders
  );

  useEffect(() => {
    console.log("EFFECT RAN");
    prevValue.current = newOrderedItems;
    addToFirebaseOrders(newOrders, id);
    addToFirebaseCart(newCartItems, id);
    dispatch(clearBuyCart());
  }, [id]);

  // render items ordered
  return (
    <div className="success-container">
      <div className="success-wrapper">
        <div className="success-inner">
          <h3 className="success-header">Order placed, Thanks!</h3>
          <p>Confirmation will be sent to your email.</p>
          <p>
            Being delivered to
            <strong>{` ${fullName}, ${buildingName}, ${street},${city}.`}</strong>
          </p>
          {prevValue.current?.map(
            (item) =>
              item.orderDate === orderDate && (
                <div className="orderedItem-wrapper" key={item.productID}>
                  <div className="orderSummary">
                    <p className="deliveryDate">within 3 working days</p>
                    <p className="deliveryEstimate">Estimated delivery</p>
                  </div>
                  <div className="orderImage">
                    <div
                      className="imageWrapper"
                      style={{ backgroundImage: `url(${item.imageUrl})` }}
                    ></div>
                  </div>
                </div>
              )
          )}
          <p className="success-footer">Review your orders </p>
        </div>
      </div>
    </div>
  );
};

export default SuccessPage;
