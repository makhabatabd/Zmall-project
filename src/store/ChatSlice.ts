import { createSlice } from '@reduxjs/toolkit';
import { AppState } from './store';

const initialState = {
  status: 'idle',
  error: null,
  channel:
    typeof window !== 'undefined'
      ? localStorage.getItem('my-channel') &&
        JSON.parse(localStorage.getItem('my-channel') || '').channel
      : '',
  message: null,
};

export const chatSlice = createSlice({
  name: 'chatPage',
  initialState,
  reducers: {
    setChannel(state, action) {
      state.channel = action.payload;
    },
    getMyMessage(state, action) {
      state.message = action.payload;
    },
  },
});

export const { setChannel, getMyMessage } = chatSlice.actions;
export const selectChatChannel = (state: AppState) => state.chatPage;

export default chatSlice.reducer;
