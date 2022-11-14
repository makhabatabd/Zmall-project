import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
// const token =
//   localStorage.getItem('token') &&
//   JSON.parse(localStorage.getItem('token') || '');

export const authSlice = createApi({
  reducerPath: 'authSlice',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://188.225.83.42:8001/api/v1/',
  }),
  endpoints: (builder) => ({
    register: builder.mutation({
      query: (data) => ({
        url: 'user/register/',
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json',
        },
      }),
    }),
    userLogin: builder.mutation({
      query: (data) => ({
        url: 'user/login/',
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json',
        },
      }),
    }),
    getToken: builder.mutation({
      query: (data) => ({
        url: '/token/',
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json',
        },
      }),
    }),
    logOut: builder.mutation({
      query: (data) => ({
        url: '/logout/',
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          Authorization: 'Bearer ' + data.token,
          'Content-Type': 'application/json',
        },
      }),
    }),
  }),
});

export const {
  useRegisterMutation,
  useUserLoginMutation,
  useGetTokenMutation,
  useLogOutMutation,
} = authSlice;
