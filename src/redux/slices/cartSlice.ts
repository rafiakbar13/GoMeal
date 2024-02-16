import { createSlice } from "@reduxjs/toolkit";

const initialState: any = [];
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
        state.push({
          id,
          name,
          image,
          price,
          qty: 1,
          total: price,
        });
      }
    },
    removeToCart: (state, action) => {
      const { id } = action.payload;
      return state.filter((item: any) => item.id !== id);
    },
    incrementQty: (state, action) => {
      const { id } = action.payload;
      const existingItem = state.find((item: any) => item.id === id);

      if (existingItem) {
        existingItem.qty += 1;
        existingItem.total = existingItem.qty * existingItem.price;
      }
    },
    decrementQty: (state, action) => {
      const { id } = action.payload;
      const existingItem = state.find((item: any) => item.id === id);

      if (existingItem) {
        existingItem.qty -= 1;
        existingItem.total = existingItem.qty * existingItem.price;
      }
    },
  },
});

export const { addToCart, removeToCart, incrementQty, decrementQty } =
  cartSlice.actions;

export default cartSlice.reducer;
