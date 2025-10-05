import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems :[], 
  itemTotalPrice: 0
}



const cartSlice = createSlice({
  name :'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.cartItems.push(action.payload);
      state.itemTotalPrice += action.payload.price
    },
    removeFromCart: () => {
      
    }
  }
})


export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;