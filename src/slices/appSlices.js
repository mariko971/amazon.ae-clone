import { createSlice } from "@reduxjs/toolkit";

import { addToFirebaseCart } from "../firebase/firebase.utils";

export const appDataSlice = createSlice({
  name: "appData",
  initialState: null,
  reducers: {
    init: (state, action) => (state = action.payload),
  },
});

export const { init } = appDataSlice.actions;

export const userSlice = createSlice({
  name: "user",
  initialState: null,
  reducers: {
    setCurrentUser: (state, action) => {
      return action.payload;
    },
    addToCart: (state, action) => {
      const { cartItem, id } = action.payload;
      // copy the cartItems array
      let cartItems = [...state.cart.cartItems];
      // Check if the item exists in the cart. if false will return undefined else the cart item
      const itemIncluded = cartItems.find(
        (item) => item.productID === cartItem.productID
      );
      if (itemIncluded !== undefined) {
        // if Item exists in cart sum up the qty of existing and in payload item
        itemIncluded.qty = cartItem.qty + itemIncluded.qty;
        // update the total amount
        itemIncluded.totalAmount = itemIncluded.price * itemIncluded.qty;
        // remove the existing item in cart
        const newCartItems = cartItems.filter(
          (item) => item.productID !== cartItem.productID
        );
        // add the new item with updated qty and totalAmount
        newCartItems.push(itemIncluded);
        // Update the state with the new cart Items
        addToFirebaseCart(newCartItems, id);
        state.cart.cartItems = newCartItems;
      } else {
        // Add the item if it does not exist in the cart
        cartItem.totalAmount = cartItem.price * cartItem.qty;
        cartItems.push(cartItem);
        addToFirebaseCart(cartItems, id);
        state.cart.cartItems = cartItems;
      }
    },
    removeFromCart: (state, action) => {
      const newCartItems = state.cart.cartItems.filter(
        (product) => product.productID !== action.payload
      );
      addToFirebaseCart(newCartItems, state.id);
    },
    removeFromFirebaseCart: (state, action) => {
      const { id } = action.payload;
      addToFirebaseCart(state.cart.cartItems, id);
    },
    totalCartAmount: (state) => {
      if (state.cart.buyCartItems.length) {
        const totalsArr = state.cart.buyCartItems.map((id) => {
          const amount = () => {
            for (let item of state.cart.cartItems) {
              if (item.productID === id) {
                return item.totalAmount;
              }
            }
          };
          return amount();
        });
        state.cart.totalCartAmount = totalsArr.reduce(
          (prev, curr) => prev + curr,
          0
        );
      } else {
        state.cart.totalCartAmount = 0;
      }
    },
    totalCartQty: (state) => {
      if (state.cart.cartItems.length) {
        const totalsArr = state.cart.cartItems.map((item) => item.qty);
        state.cart.totalCartQuantity = totalsArr.reduce(
          (prev, curr) => prev + curr,
          0
        );
      } else {
        state.cart.totalCartQuantity = 0;
      }
    },
    increaseItemQtyInCart: (state, action) => {
      const index = state.cart.cartItems.findIndex(
        (item) => item.productID === action.payload
      );

      state.cart.cartItems[index].qty += 1;
      state.cart.totalCartQuantity += 1;
      const qty = state.cart.cartItems[index].qty;
      const price = state.cart.cartItems[index].price;
      state.cart.cartItems[index].totalAmount = qty * price;
    },
    reduceItemQtyInCart: (state, action) => {
      const index = state.cart.cartItems.findIndex(
        (item) => item.productID === action.payload
      );

      if (state.cart.cartItems[index].qty > 1) {
        state.cart.cartItems[index].qty -= 1;
        state.cart.totalCartQuantity -= 1;
        const qty = state.cart.cartItems[index].qty;
        const price = state.cart.cartItems[index].price;
        state.cart.cartItems[index].totalAmount = qty * price;
      }
    },
    totalCartItemAmount: (state) => {
      state.cart.cartItems.map(
        (item) => (item.totalAmount = item.qty * item.price)
      );
    },
  },
});

export const {
  setCurrentUser,
  addToCart,
  removeFromCart,
  removeFromFirebaseCart,
  totalCartAmount,
  totalCartQty,
  increaseItemQtyInCart,
  reduceItemQtyInCart,
  totalCartItemAmount,
} = userSlice.actions;

export const fetchingSlice = createSlice({
  name: "isLoading",
  initialState: true,
  reducers: {
    setIsLoading: (state) => !state,
  },
});

export const { setIsLoading } = fetchingSlice.actions;

// ------------BUYCART SLICE------------------------------

export const buyCartSlice = createSlice({
  name: "buyCartItems",
  initialState: [],
  reducers: {
    selectCartItemToBuy: (state, action) => {
      state.push(action.payload);
    },
    deselectCartItemToBuy: (state, action) => {
      const newState = state.filter((id) => id !== action.payload);
      return newState;
    },
    removeFromBuyCart: (state, action) => {
      const newState = state.filter((id) => id !== action.payload);
      return newState;
    },
    clearBuyCart: (state) => [],
  },
});

export const {
  selectCartItemToBuy,
  deselectCartItemToBuy,
  removeFromBuyCart,
  clearBuyCart,
} = buyCartSlice.actions;

// export const homeSlice = createSlice({
//   name: "home",
//   initialState: { ads_Data },
//   reducers: {
//     homeInit: (state) => state,
//   },
// });

// export const { homeInit } = homeSlice.actions;

// export const shopSlice = createSlice({
//   name: "shop",
//   initialState: { shopData },
//   reducers: {
//     shopInit: (state) => state,
//   },
// });
// export const { shopInit } = shopSlice.actions;

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

// export const cartSlice = createSlice({
//   name: "cart",
//   initialState: {
//     totalCartAmount: 0,
//     totalCartQuantity: 0,
//     totalBuyCartQty: 0,
//     cartItems: [],
//     buyCartItems: [],
//   },
//   reducers: {
//     addToCart: (state, action) => {
//       const { cartItem, id } = action.payload;
//       // copy the cartItems array
//       let cartItems = [...state.cartItems];
//       // Check if the item exists in the cart. if false will return undefined else the cart item
//       const itemIncluded = cartItems.find(
//         (item) => item.productID === cartItem.productID
//       );
//       if (itemIncluded !== undefined) {
//         // if Item exists in cart sum up the qty of existing and in payload item
//         itemIncluded.qty = cartItem.qty + itemIncluded.qty;
//         // update the total amount
//         itemIncluded.totalAmount = itemIncluded.price * itemIncluded.qty;
//         // remove the existing item in cart
//         const newCartItems = cartItems.filter(
//           (item) => item.productID !== cartItem.productID
//         );
//         // add the new item with updated qty and totalAmount
//         newCartItems.push(itemIncluded);
//         // Update the state with the new cart Items
//         addToFirebaseCart(newCartItems, id);
//         state.cartItems = newCartItems;
//       } else {
//         // Add the item if it does not exist in the cart
//         cartItem.totalAmount = cartItem.price * cartItem.qty;
//         cartItems.push(cartItem);
//         addToFirebaseCart(cartItems, id);
//         state.cartItems = cartItems;
//       }
//     },
//     removeFromCart: (state, action) => {
//       state.cartItems = state.cartItems.filter(
//         (product) => product.productID !== action.payload
//       );
//     },
//     clearCart: (state) => {
//       return {
//         totalCartAmount: 0,
//         totalCartQuantity: 0,
//         totalBuyCartQty: 0,
//         cartItems: [],
//         buyCartItems: [],
//       };
//     },
//     removeFromBuyCart: (state, action) => {
//       state.buyCartItems = state.buyCartItems.filter(
//         (id) => id !== action.payload
//       );
//     },
//     totalCartAmount: (state) => {
//       if (state.buyCartItems.length) {
//         const totalsArr = state.buyCartItems.map((id) => {
//           const amount = () => {
//             for (let item of state.cartItems) {
//               if (item.productID === id) {
//                 return item.totalAmount;
//               }
//             }
//           };
//           return amount();
//         });
//         state.totalCartAmount = totalsArr.reduce(
//           (prev, curr) => prev + curr,
//           0
//         );
//       } else {
//         state.totalCartAmount = 0;
//       }
//     },
//     totalCartQty: (state) => {
//       if (state.cartItems.length) {
//         const totalsArr = state.cartItems.map((item) => item.qty);
//         state.totalCartQuantity = totalsArr.reduce(
//           (prev, curr) => prev + curr,
//           0
//         );
//       } else {
//         state.totalCartQuantity = 0;
//       }
//     },
//     increaseItemQtyInCart: (state, action) => {
//       const index = state.cartItems.findIndex(
//         (item) => item.productID === action.payload
//       );

//       state.cartItems[index].qty += 1;
//       state.totalCartQuantity += 1;
//     },
//     reduceItemQtyInCart: (state, action) => {
//       const index = state.cartItems.findIndex(
//         (item) => item.productID === action.payload
//       );
//       if (state.cartItems[index].qty > 1) {
//         state.cartItems[index].qty -= 1;
//         state.totalCartQuantity -= 1;
//       }
//     },
//     totalCartItemAmount: (state) => {
//       state.cartItems.map((item) => (item.totalAmount = item.qty * item.price));
//     },
//     selectCartItemToBuy: (state, action) => {
//       state.buyCartItems.push(action.payload);
//     },
//     deselectCartItemToBuy: (state, action) => {
//       state.buyCartItems = state.buyCartItems.filter(
//         (id) => id !== action.payload
//       );
//     },
//     totalBuyCartItemsQty: (state) => {
//       if (state.buyCartItems.length) {
//         const qtyArr = state.buyCartItems.map((id) => {
//           const quantity = () => {
//             for (let item of state.cartItems) {
//               if (item.productID === id) {
//                 return item.qty;
//               }
//             }
//           };
//           return quantity();
//         });
//         state.totalBuyCartQty = qtyArr.reduce((prev, curr) => prev + curr, 0);
//       } else {
//         state.totalBuyCartQty = 0;
//       }
//     },
//   },
// });

// export const {
//   addToCart,
//   removeFromCart,
//   clearCart,
//   removeFromBuyCart,
//   totalCartAmount,
//   totalCartQty,
//   increaseItemQtyInCart,
//   reduceItemQtyInCart,
//   totalCartItemAmount,
//   selectCartItemToBuy,
//   deselectCartItemToBuy,
//   totalBuyCartItemsQty,
// } = cartSlice.actions;
