import { configureStore } from '@reduxjs/toolkit'
import filterSlice from './slices/filterSlice'
import CartSlice from './slices/cart/CartSlice'
import itemSlice from './slices/itemSlice'
import { authReducer } from './slices/auth';
import newsSlice from './slices/newsSlice';
import sliderSlice from './slices/sliderSlice';

export const store = configureStore({
  reducer: { filterSlice, CartSlice,sliderSlice, itemSlice, newsSlice, auth: authReducer, },
})
