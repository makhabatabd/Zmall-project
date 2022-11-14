import { createApi } from '@reduxjs/toolkit/query/react';
import { customFetchBase } from './refreshToken';

export const favoriteSlice = createApi({
  reducerPath: 'favoriteSlice',
  baseQuery: customFetchBase,
  endpoints: (builder) => ({
    getFavorites: builder.query({
      query: () => ({
        url: 'advertisement/favorites/',
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      }),
    }),
    addFavorites: builder.mutation({
      query: (data) => ({
        url: 'advertisement/favorites/',
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json',
        },
      }),
    }),
    deleteFavorites: builder.mutation({
      query: (data) => ({
        url: 'advertisement/favorites/',
        method: 'DELETE',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json',
        },
      }),
    }),
  }),
});

export const {
  useAddFavoritesMutation,
  useDeleteFavoritesMutation,
  useGetFavoritesQuery,
} = favoriteSlice;
