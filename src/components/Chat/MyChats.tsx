import { useAppSelector } from '@/hooks';
import { useLazyGetMyChatsQuery } from '@/store/Chat.api';
import { selectChatChannel } from '@/store/ChatSlice';
import { Result } from '@/types';
import { useLocalStorage } from '@/utils';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import {
  AdvertisementItem,
  ChatDetails,
  Message,
  MessageDate,
  MyChatInner,
  MyChatsWrapper,
  SenderName,
  SlyledLink,
  UnreadMessages,
} from './Chat.style';

export const MyChats = () => {
  const [getMyChats, { data }] = useLazyGetMyChatsQuery();
  const currentUser = useLocalStorage('auth', {});
  const token = currentUser.map((elem) => elem?.token)[0];
  const router = useRouter();
  const channel = useAppSelector(selectChatChannel);

  useEffect(() => {
    getMyChats(token);
  }, []);

  useEffect(() => {
    getMyChats(token);
  }, [channel.message]);

  return (
    <MyChatsWrapper>
      {data?.results?.map((chat: Result) => (
        <MyChatInner
          key={chat.chat_id}
          onClick={() => router.push(`/chat/${chat.chat_id}`)}
        >
          <Image src={'/user/user.jpg'} alt="user" width={42} height={42} />
          <UnreadMessages>{chat.unread_count}</UnreadMessages>
          <SlyledLink href={`/chat/${encodeURIComponent(chat.chat_id)}`}>
            <ChatDetails key={chat.message.sender}>
              <div>
                <SenderName>{chat.message.sender_name}</SenderName>
                <AdvertisementItem>{chat.advertisement_name}</AdvertisementItem>
                <Message>{chat.message.message}</Message>
              </div>
              <MessageDate>{chat.message.send_date}</MessageDate>
            </ChatDetails>
          </SlyledLink>
        </MyChatInner>
      ))}
    </MyChatsWrapper>
  );
};
