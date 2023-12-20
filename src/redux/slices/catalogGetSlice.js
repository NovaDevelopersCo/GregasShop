import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from '../../axios';

export const fetchItems = createAsyncThunk('items/fetchItemsStatus', async (params) => {
  const {search, currentPage,tags} = params;
  const { data } = await axios.get(
    `/posts?page=${currentPage}&limit=4&${tags}&keyword=${search}`
  );
  return data;
});

const initialState = {
  items: [],
  status: {
    all: 'loading', // Общий статус
  },
};


 
const itemSlice = createSlice({
  name: 'items',
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchItems.pending, (state, action) => {
        state.status.all = 'loading';
      })
      .addCase(fetchItems.fulfilled, (state, action) => {
        state.status.all = 'success';}

        )
      .addCase(fetchItems.rejected, (state, action) => {
        state.status.all = 'error';

      });
  },
});

export const selectItems = (state) => state.itemSlice;
export const selectCartItemById = (id) => (state) => state.CartSlice.items.find((obj) => obj.id === id)

export const { setItems } = itemSlice.actions;

export default itemSlice.reducer;