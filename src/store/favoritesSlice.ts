import { IResult } from '@/types';
import { createApi } from '@reduxjs/toolkit/query/react';
import { customFetchBase } from './refreshToken';

interface IAuth {
  token?: '';
  access?: '';
}
let info: IAuth = {};

interface IData {
  count: number;
  results: IResult[];
}

if (typeof window !== 'undefined') {
//   const auth = JSON?.parse(localStorage?.getItem('auth') || '');
//   info = auth;
}
export const favoriteSlice = createApi({
  reducerPath: 'favoriteSlice',
  baseQuery: customFetchBase,
  endpoints: (builder) => ({
    getFavorites: builder.query<IData, void>({
      query: () => ({
        url: 'advertisement/favorites/',
        method: 'GET',
        headers: {
          Authorization: `Bearer ${info.token}`,
          'Content-Type': 'application/json',
        },
      }),
    }),
    addFavorites: builder.mutation({
      query: (data) => {
        return {
          url: 'advertisement/favorites/',
          method: 'POST',
          body: JSON.stringify({
            ads_id: data,
          }),
          headers: {
            Authorization: `Bearer ${info.token}`,
            'Content-Type': 'application/json',
          },
        };
      },
    }),
    deleteFavorites: builder.mutation({
      query: (data) => ({
        url: 'advertisement/favorites/',
        method: 'DELETE',
        body: JSON.stringify({
          ads_id: data,
        }),
        headers: {
          Authorization: `Bearer ${info.token}`,
          'Content-Type': 'application/json',
        },
      }),
    }),
  }),
});

export const {
  useAddFavoritesMutation,
  useDeleteFavoritesMutation,
  useLazyGetFavoritesQuery,
} = favoriteSlice;
