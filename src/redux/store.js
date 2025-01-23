import { configureStore } from '@reduxjs/toolkit';
import babyReducer from './slices/babySlice'

const store = configureStore({
  reducer: {
    baby: babyReducer,
  },
});

export default store;
