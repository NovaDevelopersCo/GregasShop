import { createSlice } from '@reduxjs/toolkit';
import { getCartFromLS } from '../../../utils/getCartFromLS';
import { calcTotalPrice } from '../../../utils/calcTotalPrice';

const {items, totalPrice} = getCartFromLS()
const initialState = {
  totalPrice,
  items,
};

const CartSlice = createSlice({
  name: 'cart',
  initialState: initialState,
  reducers: {
    addItem(state, action) {
      const existingItem = state.items.find((item) => item._id === action.payload._id);

      if (existingItem) {
        existingItem.count++;
      } else {
        const newItem = {
          ...action.payload,
          count: 1,
        };
        state.items.push(newItem);
      }

      state.totalPrice = calcTotalPrice(state.items);

    },
    minusItem(state, action) {
      const itemToDecrement = state.items.find((item) => item._id === action.payload);

      if (itemToDecrement) {
        if (itemToDecrement.count > 0) {
          itemToDecrement.count--;

          if (itemToDecrement.count === 0) {
            state.items = state.items.filter((item) => item._id !== action.payload);
          }
        }
      }

      state.totalPrice = calcTotalPrice(state.items);
    },
    removeItem(state, action) {
      state.items = state.items.filter((item) => item._id !== action.payload);
      state.totalPrice = calcTotalPrice(state.items);
    },
    clearItems(state) {
      state.items = [];
      state.totalPrice = 0;
    },
  },
});

export const selectCart = (state) => state.CartSlice;

export const { addItem, removeItem,minusItem, clearItems } = CartSlice.actions;

export default CartSlice.reducer;
