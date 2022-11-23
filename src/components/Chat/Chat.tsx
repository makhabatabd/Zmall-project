import { useAppSelector } from '@/hooks';
import {
  useLazyGetEachChatQuery,
  useSendMessageMutation,
} from '@/store/Chat.api';
import { selectChatChannel } from '@/store/ChatSlice';
import { IEachMessage, IElem, IResponseMessage } from '@/types';
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

export const Chat = () => {
  const router = useRouter();
  const { id } = router.query;
  const [getEachChat, { data }] = useLazyGetEachChatQuery();
  const [sendMessage] = useSendMessageMutation();

  const [value, setValue] = useState('');
  const channel = useAppSelector(selectChatChannel);
  const [newMessages, setNewMessages] = useState('');

  useEffect(() => {
    getEachChat(id);
    setNewMessages('');
  }, [id, channel]);

  const inputHandler = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setValue(e.target.value);
  };

  const myMessage: IEachMessage = {
    ads_id: data?.chat?.advertisement,
    chat_id: id,
    message: value,
    file: null,
  };

  const submitHandler = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    const result = (await sendMessage(myMessage)) as IResponseMessage;

    if (result?.data?.message) {
      setNewMessages(result.data.message);
      setValue('');
    }
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
              return item.map((elem: IElem) =>
                elem?.sender === channel.channel ? (
                  <MyMessage>{elem.message}</MyMessage>
                ) : (
                  <CustomerMessage>{elem.message}</CustomerMessage>
                )
              );
            })}

          {
            newMessages && <MyMessage>{newMessages}</MyMessage>
            // newMessages?.map((item: string, i: number) => (
            //   c
            // ))
          }
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
            {/* <input type="file" id="file" onChange={onChangeFile} />
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
            </label> */}
          </div>
        </MessagesInfo>
      </Container>
    </form>
  );
};
