import { useLazyGetMyChatsQuery } from '@/store/Chat.api';
import { useLocalStorage } from '@/utils';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { MyChatInner, MyChatsWrapper } from './Chat.style';

export const MyChats = () => {
  const [getMyChats, { data }] = useLazyGetMyChatsQuery();
  const currentUser = useLocalStorage('auth', {});
  const token = currentUser.map((elem) => elem?.token)[0];
  const router = useRouter();

  interface IChat {
    chat_id: number;
    message: IMessage;
    advertisement_name: string;
  }

  interface IMessage {
    sender: string;
    message: string;
    sender_name: string;
    send_date: number;
  }
  //console.log(data);

  useEffect(() => {
    getMyChats(token);
  }, []);

  return (
    <MyChatsWrapper>
      {data?.results?.map((chat: IChat) => (
        <MyChatInner
          key={chat.chat_id}
          onClick={() => router.push(`/chat/${chat.chat_id}`)}
        >
          <Link href={`/chat/${encodeURIComponent(chat.chat_id)}`}>
            <p>{chat.chat_id}</p>
            <p>advertisement</p>
            <p>{chat.advertisement_name}</p>
            <div key={chat.message.sender}>
              <p>{chat.message.message}</p>
              <p>{chat.message.sender_name}</p>
              <p>{chat.message.send_date}</p>
            </div>
          </Link>
        </MyChatInner>
      ))}
    </MyChatsWrapper>
  );
};
