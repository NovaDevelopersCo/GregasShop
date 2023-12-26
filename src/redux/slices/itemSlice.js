import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../axios';

export const fetchItems = createAsyncThunk('items/fetchItemsStatus', async (params) => {
  const { order, SortBy, category, search, currentPage, tag,sale } = params;

  const queryString = `/posts?page=${currentPage}&limit=4&${category}&orderBy=${SortBy || ''}&tag=${tag || ''}&sortBy=${order || ''}&keyword=${search || ''}&${sale}`;

  const { data } = await axios.get(queryString);console.log(data);
  return data;
});




const initialState = {
  items: [],
  totalPages: 0,
  itemsNew: [],
  itemsHit: [],
  status: {
    all: 'loading',
    new: 'loading',
    hit: 'loading',
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
          state.itemsNew = action.payload.data;
          state.status.new = 'success';
        } else if (action.meta.arg.itemCategory === 'hit') {
          state.itemsHit = action.payload.data;
          state.status.hit = 'success';
        } else if (action.meta.arg.itemCategory === 'all') {
          state.items = action.payload.data;
          state.totalPages = action.payload.totalPages;
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

// Переместите операторы export на верхний уровень файла
export const selectItems = (state) => state.itemSlice;
export const selectCartItemById = (id) => (state) => state.CartSlice.items.find((obj) => obj.id === id);

export const { setItems } = itemSlice.actions;

export default itemSlice.reducer;
