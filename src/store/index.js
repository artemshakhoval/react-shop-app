import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cart-slice";
import modalSlice from "./modal-slice";

const store = configureStore({
  reducer: {
    modal: modalSlice.reducer,

    cart: cartSlice.reducer,
  },
});

export default store;
