import { createSlice } from "@reduxjs/toolkit";

const initialState: any = {
  currentStep: 1,
  checkoutData: {},
};

const checkoutSlice = createSlice({
  name: "checkout",
  initialState,
  reducers: {
    setCurrentStep: (state, action) => {
      state.currentStep = action.payload;
    },
    UpdateCheckoutData: (state, action) => {
      state.checkoutData = { ...state.checkoutData, ...action.payload };
    },
  },
});

export const { setCurrentStep, UpdateCheckoutData } = checkoutSlice.actions;

export default checkoutSlice.reducer;
