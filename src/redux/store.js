import { configureStore } from "@reduxjs/toolkit";
import calcSlice from "./calcSlice";
// import cartSlice from "./cartSlice.js";
// import productSlice from "./productSlice";

const store = configureStore({
  reducer: {
    calc: calcSlice,
    // cart: cartSlice,
    // product: productSlice,
  },
});

export default store;
