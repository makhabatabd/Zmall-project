import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const chatApi = createApi({
  reducerPath: 'chatApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://188.225.83.42:8001/api/v1/' }),
  endpoints: (builder) => ({
    getMyChannel: builder.query<object,string>({
        query:(token) => ({
            url: 'chat/my-chats/', 
             headers: {
                Authorization: 'Bearer ' + token,
                'Content-Type': 'application/json',
        },       
        })
    }),
     getMyChats: builder.query<any,string>({
        query:(token) => ({
            url: 'chat/chats/', 
             headers: {
                Authorization: 'Bearer ' + token,
                'Content-Type': 'application/json',
        },       
        })
    })
  }),
})


export const { useLazyGetMyChannelQuery, useLazyGetMyChatsQuery } = chatApi