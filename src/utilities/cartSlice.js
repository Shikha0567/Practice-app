import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "Cart",
  initialState: { items: [] },
  reducers: {
    increment: (state, action) => {
      console.log(action.payload, "payload..");
      state.items.push(action.payload);
    },
    decrement: (state) => {
      //state.items -= 1;
    },
  },
});
console.log(cartSlice, "cartSlice");
export const { increment, decrement } = cartSlice.actions;
export default cartSlice.reducer;
