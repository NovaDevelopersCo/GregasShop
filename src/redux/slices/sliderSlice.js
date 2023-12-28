import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from '../../axios';

export const fetchSlider = createAsyncThunk('slider/fetchSlider', async (params) => {

  const { data } = await axios.get(
    `/slider`
  );
  return data;
});
const initialState = {
  slider: [],
  status: {
    all: 'loading', // Общий статус

  },
};

const sliderSlice = createSlice({
  name: 'slider',
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSlider.pending, (state, action) => {
        state.status.all = 'loading'
      })
      .addCase(fetchSlider.fulfilled, (state, action) => {
        state.status.all = 'success';
        if (action.meta.arg.itemCategory === 'all') {
          state.slider = action.payload;
          state.status.all = 'success';
        }
      })
      .addCase(fetchSlider.rejected, (state, action) => {
        state.status.all = 'error';
      });
  },
});


export const { setSlider } = sliderSlice.actions;
export const selectSlider = (state) => state.sliderSlice;
export default sliderSlice.reducer;
