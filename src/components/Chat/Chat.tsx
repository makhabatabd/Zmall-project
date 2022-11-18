import {
  useLazyGetEachChatQuery,
  useSendMessageMutation,
} from '@/store/Chat.api';
import { IEachMessage, IElem } from '@/types';
import { Auth } from '@/ui/modal/ConfirmModal';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
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

let token: Auth;

export const Chat = () => {
  const router = useRouter();
  const { id } = router.query;
  const [getEachChat, { data }] = useLazyGetEachChatQuery();
  const [sendMessage] = useSendMessageMutation();
  const [value, setValue] = useState('');

  useEffect(() => {
    getEachChat(id);
  }, [id]);

  const inputHandler = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setValue(e.target.value);
  };

  const myMessage: IEachMessage = {
    ads_id: data?.chat?.advertisement,
    chat_id: id,
    message: value,
  };
  if (typeof window !== 'undefined') {
    token = JSON.parse(localStorage.getItem('auth') || '');
  }

  const submitHandler = async () => {
    await sendMessage({ myMessage, token });
  };

  return (
    <form onSubmit={submitHandler}>
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
          <InputMessage
            placeholder="Вашe сообщение"
            value={value}
            onChange={inputHandler}
          />
          <div>
            <SendButton type="submit">отправить сообщение</SendButton>
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
    </form>
  );
};
