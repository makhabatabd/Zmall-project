import { IServerResponse, IUsersData, IUsersOrdersResponse } from '@/types';
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
    getUsersData: builder.query<IUsersData, void>({
      query: () => {
        const token =
          (localStorage.getItem('auth') &&
            JSON.parse(localStorage.getItem('auth') || '')) ||
          {};

        return {
          url: '/user/',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token?.token}`,
          },
        };
      },
    }),
    editUsersData: builder.mutation({
      query: (data) => {
        const token =
          (localStorage.getItem('auth') &&
            JSON.parse(localStorage.getItem('auth') || '')) ||
          {};

        return {
          url: '/user/',
          method: 'PATCH',
          body: JSON.stringify(data),
          headers: {
            Authorization: `Bearer ${token?.token}`,
            'Content-Type': 'application/json',
          },
        };
      },
    }),
  }),
});

export const {
  useGetUsersAdvertsQuery,
  useGetUsersOrdersQuery,
  useGetUsersDataQuery,
  useEditUsersDataMutation,
} = profileApi;
