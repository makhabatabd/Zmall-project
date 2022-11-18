import { createSlice } from '@reduxjs/toolkit';
import { AppState } from './store';

// const {channel} = useLocalStorage('my-channel', {})

const initialState = {
  status: 'idle',
  error: null,
  channel: typeof window !== "undefined" ? localStorage.getItem('my-channel') && JSON.parse(localStorage.getItem('my-channel')).channel : ""
};

export const chatSlice = createSlice({
  name: 'chatPage',
  initialState,
  reducers: {
    setChannel(state, action) {
      state.channel = action.payload;
    },
  },
});

export const { setChannel } = chatSlice.actions;
export const selectChatChannel = (state: AppState) => state.chatPage;

export default chatSlice.reducer;