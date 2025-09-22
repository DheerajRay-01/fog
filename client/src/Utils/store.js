import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./slice/productSlice.js";

const store = configureStore({
  reducer: {
    products: productReducer,
  },
});

export default store;
