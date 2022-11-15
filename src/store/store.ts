import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { authSlice } from './authSlice';
import {localStorageSlice} from './localStorageSlice';
import { mainSlice } from './mainSlice';
import { orderApi } from './order.api';


const makeStore = () =>
  configureStore({
    reducer: {
    [mainSlice.name]: mainSlice.reducer,
    [localStorageSlice.name]: localStorageSlice.reducer,
    [authSlice.reducerPath]: authSlice.reducer,
    [orderApi.reducerPath] : orderApi.reducer,

    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat([authSlice.middleware, orderApi.middleware]),
  });

export const store = makeStore();
export type AppState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action<string>
>;