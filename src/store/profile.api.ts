import { IServerResponse, IUsersOrdersResponse } from '@/types';
import { createApi } from '@reduxjs/toolkit/query/react';
import { customFetchBase } from './refreshToken';

export const profileApi = createApi({
  reducerPath: 'profileApi',
  tagTypes: ['Profile'],
  baseQuery: customFetchBase,
  endpoints: (builder) => ({
    getUsersAdverts: builder.query<IServerResponse, void>({
      query: () => {
        const token =
          (localStorage.getItem('auth') &&
            JSON.parse(localStorage.getItem('auth') || '')) ||
          {};

        return {
          url: '/advertisement/users-ads/',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token?.token}`,
          },
        };
      },
    }),
    getUsersOrders: builder.query<IUsersOrdersResponse, void>({
      query: () => {
        const token =
          (localStorage.getItem('auth') &&
            JSON.parse(localStorage.getItem('auth') || '')) ||
          {};

        return {
          url: '/order/list/',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token?.token}`,
          },
        };
      },
    }),
  }),
});

export const { useGetUsersAdvertsQuery, useGetUsersOrdersQuery } = profileApi;
