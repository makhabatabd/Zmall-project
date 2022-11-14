import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { mainSlice } from './mainSlice';
import { orderApi } from './order.api';


const makeStore = () =>
  configureStore({
    reducer: {
      [mainSlice.name]: mainSlice.reducer,
      [orderApi.reducerPath] : orderApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(orderApi.middleware),
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
