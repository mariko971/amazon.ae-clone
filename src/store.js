import { configureStore, combineReducers } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

import storage from "redux-persist/lib/storage";

import {
  filtersSlice,
  buyCartSlice,
  appDataSlice,
  fetchingSlice,
  userSlice,
} from "./slices/appSlices";

const persistConfig = {
  key: "root",
  storage,
  // whitelist: ["cart"],
};

const reducers = combineReducers({
  filters: filtersSlice.reducer,
  buyCart: buyCartSlice.reducer,
  appData: appDataSlice.reducer,
  isLoading: fetchingSlice.reducer,
  user: userSlice.reducer,
});

const rootReducer = persistReducer(persistConfig, reducers);

export const Store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [
          FLUSH,
          REHYDRATE,
          PAUSE,
          PERSIST,
          PURGE,
          REGISTER,
          "user/setCurrentUser",
        ],
      },
    }),
});

export const persistor = persistStore(Store);

// export default Store;
