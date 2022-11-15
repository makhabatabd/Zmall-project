import { useLocalStorage } from '@/utils';
import { createSlice } from '@reduxjs/toolkit';
import { AppState } from './store';

const initialState = {
  status: 'idle',
  error: null,
  token: null,

};

export const localStorageSlice = createSlice({
  name: 'localStorage',
  initialState,
  reducers: {
    setToLocalStorage(state, action) {
        state.token = action.payload;

    },
     getFromLocalStorage(state, action) {
        // useLocalStorage(action.type, {})
//  if(typeof window !== "undefined"){
//      const savedItem = localStorage.getItem(action.type);
//      const parsedItem = JSON.parse(savedItem);
//      return parsedItem || state.token;
//   }
    },
  },
});

export const { setToLocalStorage } = localStorageSlice.actions;
export const selectMainState = (state: AppState) => state.localStorage;

export default localStorageSlice.reducer;
