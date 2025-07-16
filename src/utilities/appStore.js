import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";

export const mainStore = configureStore({
  reducer: {
    //This is the entire app's reducer, it consists of many small reducers (different slices)
    cart: cartReducer,
  },
});
