import { configureStore } from "@reduxjs/toolkit";

import {
  homeSlice,
  shopSlice,
  filtersSlice,
  cartSlice,
} from "./slices/appSlices";

const Store = configureStore({
  reducer: {
    home: homeSlice.reducer,
    shop: shopSlice.reducer,
    filters: filtersSlice.reducer,
    cart: cartSlice.reducer,
  },
});

export default Store;
