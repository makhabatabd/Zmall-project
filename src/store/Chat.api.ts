import { IAuth, IData, IEachMessage } from '@/types';
import { Auth } from '@/ui/modal/ConfirmModal';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

let info: IAuth = {};
if (typeof window !== 'undefined') {
  const auth =
    (localStorage.getItem('auth') &&
      JSON.parse(localStorage.getItem('auth') || '')) ||
    {};
  info = auth;
}


export const chatApi = createApi({
  reducerPath: 'chatApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://188.225.83.42:8001/api/v1/' }),
  endpoints: (builder) => ({
    getMyChannel: builder.query<object, string>({
      query: (token) => ({
        url: 'chat/my-chats/',
        headers: {
          Authorization: 'Bearer ' + token,
          'Content-Type': 'application/json',
        },
      }),
    }),
    getMyChats: builder.query<any, string>({
      query: (token) => ({
        url: 'chat/chats/',
        headers: {
          Authorization: 'Bearer ' + token,
          'Content-Type': 'application/json',
        },
      }),
    }),
    getEachChat: builder.query<IData, string | string[] | undefined>({
      query: (id) => ({
        url: `/chat/?chat_id=${id}`,
        headers: {
          Authorization: 'Bearer ' + info.token,
          'Content-Type': 'application/json',
        },
      }),
    }),
     sendMessage: builder.mutation<IEachMessage,  any>({
      query: (formData) => ({
                url: 'chat/message/',
                method: "POST",
                body: JSON.stringify(formData),
                headers: {
                  Authorization: 'Bearer ' + info.token,
                  // 'Content-Type': 'application/json',
                // 'Content-Type': 'multipart/form-data'
                'content-type': 'multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW'
                },
      }),
  }),
  
  }),
});

export const {
  useLazyGetMyChannelQuery,
  useLazyGetMyChatsQuery,
  useLazyGetEachChatQuery,
  useSendMessageMutation,

} = chatApi;