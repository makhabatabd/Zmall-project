import { createSlice } from '@reduxjs/toolkit';
import { AppState } from './store';

const initialState = {
  status: 'idle',
  error: null,
  channel: ""
};

export const chatSlice = createSlice({
  name: 'chatPage',
  initialState,
  reducers: {
    getChannel(state, action) {
      state.channel = action.payload;
    },
  },
});

export const { getChannel } = chatSlice.actions;
export const selectMainState = (state: AppState) => state.mainPage;

export default chatSlice.reducer;