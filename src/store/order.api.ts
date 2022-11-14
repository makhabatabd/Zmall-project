import { ISubscriptions } from '@/types';
import { Obj } from '@/ui/modal/ConfirmModal';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

interface IResponse {
  redirect_url: string
}

export const orderApi = createApi({
  reducerPath: 'orderApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://188.225.83.42:8001/api/v1' }),
  endpoints: (builder) => ({
    orderPayment: builder.mutation<IResponse, Obj>({
      query: (name) => ({
                url: '/order/payment/',
                method: "POST",
                body: JSON.stringify(name),
                headers: {
                    "Content-Type": "application/json",
                },
      }),
    }),
    getOrderSubscriptions: builder.query<ISubscriptions,string>({
        query:() => ({
            url: '/order/subscriptions/',        
        })
    })
  }),
})


export const { useOrderPaymentMutation, useLazyGetOrderSubscriptionsQuery } = orderApi