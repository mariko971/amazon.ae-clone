import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { cartAction } from "../../redux.utils";
import { truncate, formatter } from "../../components/utils";
import {
  increaseItemQtyInCart,
  reduceItemQtyInCart,
  removeFromCart,
  selectCartItemToBuy,
  deselectCartItemToBuy,
  totalCartAmount,
  totalBuyCartItemsQty,
} from "../../slices/appSlices";

const CartWithItems = ({ item }) => {
  const [isChecked, setIsChecked] = useState(false);
  //   const [buyItemsArr, setBuyItemsArr] = useState([]);
  const dispatch = useDispatch();

  const handleChange = () => {
    const productID = item.productID;
    if (!isChecked) {
      dispatch(selectCartItemToBuy(productID));
      dispatch(totalCartAmount());
      dispatch(totalBuyCartItemsQty());
      setIsChecked(!isChecked);
    } else {
      dispatch(deselectCartItemToBuy(productID));
      dispatch(totalCartAmount());
      dispatch(totalBuyCartItemsQty());
      setIsChecked(!isChecked);
    }
  };

  return (
    <div className="cart-items_main">
      <span>
        <input
          type="checkbox"
          checked={isChecked}
          value={[item.productID, item.totalAmount]}
          onChange={handleChange}
        />
      </span>
      <span className="cart-item_img">
        <img src={item.imageUrl} alt="product" />
      </span>
      <span className="cart-item_info">
        <h3>{truncate(item.productDescription)}</h3>
        <p className="cart-item_info-txt">Eligible for Free delivery</p>
        <div className="cart-item_qty">
          <span className="cart-item_qty-label">Qty:</span>
          <span className="cart-item_qty-qty">{item.qty}</span>
          <span className="cart-item_qty-arrows">
            <span
              className="cart-item_qty-up"
              onClick={() =>
                cartAction(dispatch, increaseItemQtyInCart, item.productID)
              }
            >
              &#10094;
            </span>
            <span
              className="cart-item_qty-dwn"
              onClick={() =>
                cartAction(dispatch, reduceItemQtyInCart, item.productID)
              }
            >
              &#10094;
            </span>
          </span>
          <span
            className="cart-item_delete"
            onClick={() => cartAction(dispatch, removeFromCart, item.productID)}
          >
            Delete
          </span>
        </div>
      </span>
      <span className="cart-item_value">{formatter.format(item.price)}</span>
    </div>
  );
};

export default CartWithItems;
