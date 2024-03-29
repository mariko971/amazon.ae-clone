import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { cartAction } from "../../redux.utils";
import { truncate, formatter } from "../../components/utils";
import {
  increaseItemQtyInCart,
  reduceItemQtyInCart,
  removeFromCart,
  removeFromBuyCart,
  selectCartItemToBuy,
  deselectCartItemToBuy,
} from "../../slices/appSlices";

const CartWithItems = ({ item }) => {
  const buyCartItems = useSelector((state) => state.buyCart);
  const [isChecked, setIsChecked] = useState(
    buyCartItems.includes(item.productID)
  );
  const dispatch = useDispatch();

  const handleDeleteItem = () => {
    cartAction(dispatch, removeFromCart, item.productID);
    cartAction(dispatch, removeFromBuyCart, item.productID);
  };

  const handleChange = () => {
    const productID = item.productID;
    if (!isChecked) {
      dispatch(selectCartItemToBuy(productID));
      setIsChecked(!isChecked);
    } else {
      dispatch(deselectCartItemToBuy(productID));
      setIsChecked(!isChecked);
    }
  };

  return (
    <div className="cart-items_main">
      <div className="cart-image-wrapper">
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
      </div>
      <div className="cart-item-wrapper">
        <div className="cart-item_info">
          <h3>{truncate(item.productDescription, 13)}</h3>
          <p className="cart-item_info-txt">Eligible for Free delivery</p>
          <div className="cart-item_qty-wrapper">
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
            </div>
            <p className="cart-item_delete" onClick={() => handleDeleteItem()}>
              Delete
            </p>
          </div>
        </div>
        <span className="cart-item_value">{formatter.format(item.price)}</span>
      </div>
    </div>
  );
};

export default CartWithItems;
