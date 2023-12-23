import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
    totalItems: 0,
    totalPrice: 0,
    addAmount: 1,
  },
  reducers: {
    getAmount: (state, action) => {
      const item = state.cart.find((item) => item._id === action.payload._id);
      state.addAmount = action.payload;
      console.log(state.addAmount);
    },
    addToCart: (state, action) => {
      const itemInCart = state.cart.find(
        (item) => item._id === action.payload._id
      );
      if (itemInCart) {
        itemInCart.amount += state.addAmount;
      } else {
        state.cart.push({ ...action.payload, amount: state.addAmount });
      }
    },
    increase: (state, action) => {
      const item = state.cart.find((item) => item._id === action.payload._id);
      item.amount++;
    },
    decrease: (state, action) => {
      const item = state.cart.find((item) => item._id === action.payload._id);
      if (item.amount === 1) {
        state.cart = state.cart.filter(
          (item) => item._id !== action.payload._id
        );
      } else {
        item.amount--;
      }
    },
    remove: (state, action) => {
      const removeItem = state.cart.filter(
        (item) => item._id !== action.payload._id
      );
      state.cart = removeItem;
    },
    clear: (state) => {
      state.cart = [];
    },
    total: (state) => {
      let amount = 0;
      let total = 0;
      state.cart.forEach((item) => {
        amount += item.amount;
        total += item.price * item.amount;
      });
      state.totalItems = amount;
      state.totalPrice = total;
    },
  },
});

export const {
  getAmount,
  addToCart,
  increase,
  decrease,
  remove,
  clear,
  total,
} = cartSlice.actions;
export default cartSlice.reducer;
