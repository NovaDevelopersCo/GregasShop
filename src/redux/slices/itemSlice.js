import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchItems = createAsyncThunk('items/fetchItemsStatus', async (params) => {
  const { order, SortBy, category, search, currentPage } = params;
  const { data } = await axios.get(
    `https://650c60bf47af3fd22f678d4b.mockapi.io/items?page=${currentPage}&limit=4&${category}&sortBy=${SortBy}&order=${order}${search}`
  );
  return data;
});

const initialState = {
  items: [],
  itemsNew: [],
  itemsHit: [],
  status: {
    all: 'loading', // Общий статус
    new: 'loading', // Статус для новых элементов
    hit: 'loading', // Статус для хитов
    
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
        state.status.new = 'loading';
        state.status.hit = 'loading';
      })
      .addCase(fetchItems.fulfilled, (state, action) => {
        state.status.all = 'success';
        
        if (action.meta.arg.itemCategory === 'new') {
          state.itemsNew = action.payload;
          state.status.new = 'success';
        } else if (action.meta.arg.itemCategory === 'hit') {
          state.itemsHit = action.payload;
          state.status.hit = 'success';
        } else if (action.meta.arg.itemCategory === 'all') {
          state.items = action.payload;
          state.status.all = 'success';
        }
      })
      .addCase(fetchItems.rejected, (state, action) => {
        state.status.all = 'error';
        state.status.new = 'error';
        state.status.hit = 'error';
      });
  },
});

export const selectItems = (state) => state.itemSlice;
export const selectCartItemById = (id) => (state) => state.CartSlice.items.find((obj) => obj.id === id) 

export const { setItems } = itemSlice.actions;

export default itemSlice.reducer;
