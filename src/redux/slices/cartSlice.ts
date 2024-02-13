import { createSlice } from "@reduxjs/toolkit";

const initialState: any = [];
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {},
    removeToCart: (state, action) => {},
    incrementQty: (state, action) => {},
    decrementQty: (state, action) => {},
  },
});

export const { addToCart, removeToCart, incrementQty, decrementQty } =
  cartSlice.actions;

export default cartSlice.reducer;
