import { createSlice, current } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "Cart",
  initialState: { items: [] },
  reducers: {
    increment: (state, action) => {
      console.log(action.payload, "payload..");
      let itemInCart = state.items.find((item) => item.id == action.payload.id);
      if (itemInCart) {
        itemInCart.count += 1;
      } else {
        state.items.push({ count: 1, ...action.payload });
      }
      console.log(current(state.items), "state.items");
    },
    decrement: (state, action) => {
      let itemId = action.payload; // we are sending only id in payload for decrement
      let itemInCart = state.items.find((item) => item.id == itemId);
      let itemIndex = state.items.findIndex((item) => item.id == itemId);
      if (itemInCart.count == 1) {
        state.items.splice(itemIndex, 1);
      } else {
        itemInCart.count -= 1;
      }
    },
  },
});

export const { increment, decrement } = cartSlice.actions;
export default cartSlice.reducer;
