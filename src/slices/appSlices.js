import { createSlice } from "@reduxjs/toolkit";

import { ads_Data } from "../DATA";
import { shopData } from "../shopData";

export const homeSlice = createSlice({
  name: "home",
  initialState: { ads_Data },
  reducers: {
    homeInit: (state) => state,
  },
});

export const { homeInit } = homeSlice.actions;

export const shopSlice = createSlice({
  name: "shop",
  initialState: { shopData },
  reducers: {
    shopInit: (state) => state,
  },
});
export const { shopInit } = shopSlice.actions;

export const filtersSlice = createSlice({
  name: "filters",
  initialState: {
    brand: [],
    rating: 1,
    memory: [],
    storage: [],
    gender: [],
    OS: [],
    CPU: [],
    screenSize: [],
  },
  reducers: {
    filterBy: (state, action) => {
      state[action.payload.filter].push(action.payload.value);
    },
    removeFilter: (state, action) => {
      const newArray = state[action.payload.filter].filter(
        (brand) => action.payload.value !== brand
      );
      state[action.payload.filter] = newArray;
    },
    filterByReview: (state, action) => {
      state.rating = action.payload;
    },

    resetFilters: (state) =>
      (state = {
        brand: [],
        rating: 1,
        memory: [],
        storage: [],
        gender: [],
        OS: [],
        CPU: [],
        screenSize: [],
      }),
  },
});

export const { filterBy, removeFilter, filterByReview, resetFilters } =
  filtersSlice.actions;

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    totalCartAmount: 0,
    cartItems: [],
  },
  reducers: {
    addToCart: (state, action) => {
      // copy the cartItems array
      let cartItems = [...state.cartItems];
      // Check if the item exists in the cart. if false will return undefined else the cart item
      const itemIncluded = cartItems.find(
        (item) => item.productID === action.payload.productID
      );
      if (itemIncluded !== undefined) {
        // if Item exists in cart sum up the qty of existing and in payload item
        itemIncluded.qty = action.payload.qty + itemIncluded.qty;
        // update the total amount
        itemIncluded.totalAmount = itemIncluded.price * itemIncluded.qty;
        // remove the existing item in cart
        const newCartItems = cartItems.filter(
          (item) => item.productID !== action.payload.productID
        );
        // add the new item with updated qty and totalAmount
        newCartItems.push(itemIncluded);
        // Update the state with the new cart Items
        state.cartItems = newCartItems;
      } else {
        // Add the item if it does not exist in the cart
        state.cartItems.push(action.payload);
      }
    },
    removeFromCart: (state, action) => {
      const newCart = state.cartItems.filter(
        (product) => product.productID !== action.payload
      );
      return newCart;
    },
    totalCartAmount: (state) => {
      const totalsArr = state.cartItems.map((item) => item.totalAmount);
      state.totalCartAmount = totalsArr.reduce((prev, curr) => prev + curr);
    },
  },
});

export const { addToCart, removeFromCart, totalCartAmount } = cartSlice.actions;
