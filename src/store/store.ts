import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { mainSlice } from './mainSlice';

const makeStore = () =>
  configureStore({
    reducer: {
      [mainSlice.name]: mainSlice.reducer,
    },
    devTools: true,
  });

const store = makeStore();

export type AppState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action<string>
>;

export default store;
