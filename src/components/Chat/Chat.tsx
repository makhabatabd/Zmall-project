import { useLazyGetEachChatQuery } from '@/store/Chat.api';
import { IElem } from '@/types';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import {
  Container,
  CustomerMessage,
  Divider,
  InputMessage,
  MessagesInfo,
  MyMessage,
  ProductInfo,
  SendButton,
  UserInfo,
} from './Chat.style';

export const Chat = () => {
  const router = useRouter();
  const { id } = router.query;
  const [getEachChat, { data }] = useLazyGetEachChatQuery();

  useEffect(() => {
    getEachChat(id);
  }, [id]);

  return (
    <>
      <Container>
        <UserInfo>
          <Image src={'/user/user.jpg'} alt="user" width={42} height={42} />
          <p>{data?.chat.sender_name}</p>
        </UserInfo>
      </Container>
      <Divider />
      <Container>
        <ProductInfo>
          <div>
            <p>{data?.chat.advertisement_name}</p>
            <p>{data?.chat.advertisement_price} ₸</p>
          </div>
        </ProductInfo>
        <MessagesInfo>
          {data?.messages_parts && <p>{Object.keys(data?.messages_parts)}</p>}
          {data?.messages_parts &&
            Object.values(data?.messages_parts).map((item: IElem[]) => {
              return item.map((elem: IElem) => {
                return elem.sender ? (
                  <CustomerMessage>{elem.message}</CustomerMessage>
                ) : (
                  <MyMessage>{elem.message}</MyMessage>
                );
              });
            })}
        </MessagesInfo>
        <Divider />
        <MessagesInfo>
          <InputMessage placeholder="Вашe сообщение" />
          <div>
            <SendButton>отправить сообщение</SendButton>
            <input type="file" id="file" />
            <label htmlFor="file">
              <div>
                <Image
                  src="/paperclip.svg"
                  alt="paperclip"
                  width={24}
                  height={24}
                />
                <span> Прикрепить файл (до 5мб)</span>
              </div>
            </label>
          </div>
        </MessagesInfo>
      </Container>
    </>
  );
};
