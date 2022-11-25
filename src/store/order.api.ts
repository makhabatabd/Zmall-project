import { ISubscriptions } from '@/types';
import { Auth, Obj } from '@/ui/modal/ConfirmModal';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

interface IResponse {
  redirect_url: string;
}

export const orderApi = createApi({
  reducerPath: 'orderApi',
  tagTypes: ['Post'],
  baseQuery: fetchBaseQuery({ baseUrl: 'http://188.225.83.42:8001/api/v1' }),
  endpoints: (builder) => ({
    orderPayment: builder.mutation<IResponse, { Obj: Obj; token: Auth }>({
      query: ({ Obj, token }) => ({
        url: '/order/payment/',
        method: 'POST',
        body: JSON.stringify(Obj),
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token.token}`,
        },
      }),
    }),
    getOrderSubscriptions: builder.query<ISubscriptions, string>({
      query: () => ({
        url: '/order/subscriptions/',
      }),
    }),
  }),
});

export const { useOrderPaymentMutation, useLazyGetOrderSubscriptionsQuery } = orderApi;
