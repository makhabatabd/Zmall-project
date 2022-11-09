import { createSlice } from '@reduxjs/toolkit';
import { AppState } from './store';

const initialState = {
  status: 'idle',
  error: null,
  goods: [],
};

export const mainSlice = createSlice({
  name: 'mainPage',
  initialState,
  reducers: {
    addToStore(state, action) {
      state.goods = action.payload;
    },
  },
});

export const { addToStore } = mainSlice.actions;
export const selectMainState = (state: AppState) => state.mainPage;

export default mainSlice.reducer;
