import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";

const initialState = {
  cartItems: [],
  itemTotalPrice: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;
      // console.log(item.size);
      // console.log('item', item.id);
      const existItem = state.cartItems.find((i) => i.id === item.id);
      
      if (existItem) {
        console.log(existItem);
        const existItem2 = state.cartItems.find((i) => i.id === item.id ? i.size == item.size : null);
        if (existItem2) {
          console.log(existItem2.quantity);
          existItem2.quantity += 1;
          return
        }
        else {
          state.cartItems.push(action.payload);
          state.itemTotalPrice += action.payload.price;
        }
        // existItem.size = item.size
      } else {
        state.cartItems.push(action.payload);
        state.itemTotalPrice += action.payload.price;

      }
      // console.log('cartItem', state.cartItems);

      
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
