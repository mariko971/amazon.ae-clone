import React from "react";
import { Link } from "react-router-dom";
import { formatter } from "../../components/utils";

const CartTotal = ({
  props: { cartQty, totalBuyCartQty, totalCartAmount, shippingInfo },
}) => {
  return (
    <div className="cart__aside-buy">
      {cartQty > 0 ? (
        <p className="cart-items_total">
          {` Subtotal (${totalBuyCartQty} ${
            totalBuyCartQty > 1 ? "Items" : "Item"
          }): `}
          <span id="cart-items_total">{formatter.format(totalCartAmount)}</span>
        </p>
      ) : (
        <p className="cart-items_total">No items selected</p>
      )}
      <Link to={shippingInfo.country ? "/buy/checkout" : "/buy/shipping"}>
        <button
          className="cart__aside-buy-btn"
          disabled={totalBuyCartQty === 0}
        >
          Proceed to Buy
        </button>
      </Link>
    </div>
  );
};

export default CartTotal;
