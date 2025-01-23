// store/babySlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchBabyData = createAsyncThunk('baby/fetchBabyData', async () => {
  const response = await fetch('https://incomparable-brioche-b13e68.netlify.app/api/babies');
  if (!response.ok) throw new Error('Failed to fetch data');
  const data = await response.json();
  return data;
});

const babySlice = createSlice({
  name: 'baby',
  initialState: {
    data: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBabyData.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchBabyData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchBabyData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default babySlice.reducer;
