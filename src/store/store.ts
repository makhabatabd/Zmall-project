import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { authSlice } from './authSlice';
import { chatApi } from './Chat.api';
import { chatSlice } from './ChatSlice';
import { favoriteSlice } from './favoritesSlice';

import { mainSlice } from './mainSlice';
import { orderApi } from './order.api';


const makeStore = () =>
  configureStore({
    reducer: {
    [mainSlice.name]: mainSlice.reducer,
    [chatSlice.name]: chatSlice.reducer,
    [authSlice.reducerPath]: authSlice.reducer,
    [orderApi.reducerPath] : orderApi.reducer,
    [favoriteSlice.reducerPath]: favoriteSlice.reducer,
    [chatApi.reducerPath]: chatApi.reducer,

    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat([authSlice.middleware, orderApi.middleware,  favoriteSlice.middleware, chatApi.middleware ]),
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