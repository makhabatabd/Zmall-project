import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { authSlice } from './authSlice';
import { favoriteSlice } from './favoritesSlice';

import { mainSlice } from './mainSlice';
import { orderApi } from './order.api';
import { adminSlice } from '@/store/adminSlice';


const makeStore = () =>
  configureStore({
    reducer: {
    [mainSlice.name]: mainSlice.reducer,
    [authSlice.reducerPath]: authSlice.reducer,
    [orderApi.reducerPath] : orderApi.reducer,
    [favoriteSlice.reducerPath]: favoriteSlice.reducer,
    [adminSlice.name]: adminSlice.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat([authSlice.middleware, orderApi.middleware,  favoriteSlice.middleware,]),
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