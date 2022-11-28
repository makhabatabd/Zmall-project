import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { mainSlice } from './mainSlice';
import { addAdvertising } from '@/store/addAdvertising/addAdvertising.api';

const makeStore = () =>
  configureStore({
    reducer: {
      [mainSlice.name]: mainSlice.reducer,
      [addAdvertising.reducerPath]: addAdvertising.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(addAdvertising.middleware),
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
