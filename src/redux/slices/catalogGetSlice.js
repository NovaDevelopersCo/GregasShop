import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from '../../axios';

export const fetchCatalog = createAsyncThunk('items/fetchCatalogStatus', async (params) => {
  const {tag} = params;
  const { data } = await axios.get(
    // `/posts?page=${currentPage}&limit=4&tag=${tags}&keyword=${search}`
    `/posts?&limit=4&tag=${tag}`
  );
  return data;

});

const initialState = {
  items: [],
  status: {
    all: 'loading', // Общий статус
  },
};



const CatalogGetSlice = createSlice({
  name: 'items',
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCatalog.pending, (state, action) => {
        state.status.all = 'loading';
      })
      .addCase(fetchCatalog.fulfilled, (state, action) => {
        state.status.all = 'success';}

        )
      .addCase(fetchCatalog.rejected, (state, action) => {
        state.status.all = 'error';

      });
  },
});

export const selectCatalog = (state) => state.CatalogGetSlice;
export const selectCartItemById = (id) => (state) => state.CartSlice.items.find((obj) => obj.id === id)

export const { setItems } = CatalogGetSlice.actions;

export default CatalogGetSlice.reducer;