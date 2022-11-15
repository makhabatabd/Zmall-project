import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { authSlice } from './authSlice';
import { favoriteSlice } from './favoritesSlice';
import { mainSlice } from './mainSlice';

const makeStore = () =>
  configureStore({
    reducer: {
      [mainSlice.name]: mainSlice.reducer,
      [authSlice.reducerPath]: authSlice.reducer,
      [favoriteSlice.reducerPath]: favoriteSlice.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat([
        authSlice.middleware,
        favoriteSlice.middleware,
      ]),
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
