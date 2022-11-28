import { createSlice } from '@reduxjs/toolkit';
import { AppState } from './store';

const initialState = {
  status: 'idle',
  error: null,
  goods: [],
  results: [],
};

export const mainSlice = createSlice({
  name: 'mainPage',
  initialState,
  reducers: {
    addToStore(state, action) {
      state.goods = action.payload;
    },
    addResults(state, action) {
      state.results = action.payload;
    },
  },
});

export const { addToStore, addResults } = mainSlice.actions;
export const selectMainState = (state: AppState) => state.mainPage;

export default mainSlice.reducer;
