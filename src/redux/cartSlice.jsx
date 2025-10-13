import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  itemTotalPrice: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.cartItems.push(action.payload);
      state.itemTotalPrice += action.payload.price;
    },
    removeFromCart: () => {
      const filterCart = state.cartItems.filter((items) => items !== item);
      // console.log(filterCart);
      state.cartItems = filterCart;
    },

    increaseItem: (state, action) => {
      const item = state.cartItems.find((i) => i.id === action.payload);

      if (item) {
        item.quantity += 1;
      }

      state.itemTotalPrice = state.cartItems.reduce(
        (sum, i) => sum + i.price * i.quantity,
        0
      );
    },

    decreaseItem: (state, action) => {
      const item = state.cartItems.find((i) => i.id === action.payload);
      if (item.quantity === 1) {
        const filterCart = state.cartItems.filter((items) => items !== item);
        // console.log(filterCart);
        state.cartItems = filterCart;
      }
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      }
      state.itemTotalPrice = state.cartItems.reduce(
        (sum, i) => sum + i.price * item.quantity,
        0
      );
    },
  },
});

export const { addToCart, removeFromCart, increaseItem, decreaseItem } =
  cartSlice.actions;
export default cartSlice.reducer;
