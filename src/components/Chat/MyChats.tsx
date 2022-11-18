import { useLazyGetMyChatsQuery } from '@/store/Chat.api';
import { useLocalStorage } from '@/utils';
import React, { useEffect } from 'react';
import { MyChatInner, MyChatsWrapper } from './Chat.style';

export const MyChats = () => {
  const [getMyChats, { data }] = useLazyGetMyChatsQuery();
  const currentUser = useLocalStorage('auth', {});
  const token = currentUser.map((t) => t?.token)[0];

  console.log(data);

  useEffect(() => {
    getMyChats(token);
  }, []);

  return (
    <MyChatsWrapper>
      {data?.results?.map((chat) => (
        <MyChatInner key={chat.chat_id}>
          <p>advertisement</p>
          <p>{chat.advertisement_name}</p>
          <div key={chat.message.sender}>
            <p>{chat.message.message}</p>
            <p>{chat.message.sender_name}</p>
            <p>{chat.message.send_date}</p>
          </div>
        </MyChatInner>
      ))}
    </MyChatsWrapper>
  );
};
