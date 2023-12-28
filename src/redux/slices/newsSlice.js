import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from '../../axios';

export const fetchNews = createAsyncThunk('news/fetchNewsStatus', async (params) => {

  const { data } = await axios.get(
    `/news`
  );
  return data;
});
const initialState = {
  news: [],
  status: {
    all: 'loading', // Общий статус

  },
};

const newsSlice = createSlice({
  name: 'news',
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchNews.pending, (state, action) => {
        state.status.all = 'loading'
      })
      .addCase(fetchNews.fulfilled, (state, action) => {
        state.status.all = 'success';
        if (action.meta.arg.itemCategory === 'all') {
          state.news = action.payload;
          state.status.all = 'success';
        }
      })
      .addCase(fetchNews.rejected, (state, action) => {
        state.status.all = 'error';
      });
  },
});


export const { setNews } = newsSlice.actions;
export const selectNews = (state) => state.newsSlice;
export default newsSlice.reducer;
