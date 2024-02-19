import { createSlice } from "@reduxjs/toolkit";

const initialState: any =
  (typeof window !== "undefined" &&
    JSON.parse(localStorage.getItem("cart") ?? "")) ||
  [];
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { id, name, image, price, qty, total } = action.payload;
      const existingItem = state.find((item: any) => item.id === id);

      if (existingItem) {
        existingItem.qty += 1;
        existingItem.total = existingItem.qty * price;
      } else {
        const newItem = { id, name, image, price, qty: 1, total: price };
        state.push(newItem);
        if (typeof window !== "undefined") {
          localStorage.setItem("cart", JSON.stringify(state));
        }
      }
    },
    removeToCart: (state, action) => {
      const { id } = action.payload;
      const newState = state.filter((item: any) => item.id !== id);
      if (typeof window !== "undefined") {
        localStorage.setItem("cart", JSON.stringify(newState));
      }
      return newState;
    },
    incrementQty: (state, action) => {
      const { id } = action.payload;
      const existingItem = state.find((item: any) => item.id === id);

      if (existingItem) {
        existingItem.qty += 1;
        existingItem.total = existingItem.qty * existingItem.price;
        if (typeof window !== "undefined") {
          localStorage.setItem("cart", JSON.stringify([...state]));
        }
      }
    },
    decrementQty: (state, action) => {
      const { id } = action.payload;
      const existingItem = state.find((item: any) => item.id === id);

      if (existingItem) {
        existingItem.qty -= 1;
        existingItem.total = existingItem.qty * existingItem.price;
        if (typeof window !== "undefined") {
          localStorage.setItem("cart", JSON.stringify([...state]));
        }
      }
    },
  },
});

export const { addToCart, removeToCart, incrementQty, decrementQty } =
  cartSlice.actions;

export default cartSlice.reducer;
