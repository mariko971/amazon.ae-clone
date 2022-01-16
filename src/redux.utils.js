import {
  totalCartQty,
  totalCartItemAmount,
  totalCartAmount,
  totalBuyCartItemsQty,
} from "./slices/appSlices";

export const cartAction = (dispatch, slice, id) => {
  dispatch(slice(id));
  dispatch(totalCartQty());
  dispatch(totalCartItemAmount());
  dispatch(totalBuyCartItemsQty());
  dispatch(totalCartAmount());
};
