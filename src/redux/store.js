import { configureStore } from '@reduxjs/toolkit'
import filterSlice from './slices/filterSlice'
import CartSlice from './slices/CartSlice'
import itemSlice from './slices/itemSlice'


export const store = configureStore({
  reducer: { filterSlice, CartSlice, itemSlice },
})
