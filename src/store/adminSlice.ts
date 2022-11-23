import { createSlice } from '@reduxjs/toolkit';
import { AppState } from './store';

const initialState = {
  status: 'idle',
  error: null,
  reports: [],
  users:[]
};

export const adminSlice = createSlice({
  name: 'adminPage',
  initialState,
  reducers: {
    addToStoreComplains(state, action) {
      state.reports = action.payload;
    },
    addToStoreUsers(sate, actions) {
      sate.users = actions.payload
    }
  },
});

export const { addToStoreComplains , addToStoreUsers } = adminSlice.actions;
export const selectAdminState = (state: AppState) => state.adminPage;

export default adminSlice.reducer;