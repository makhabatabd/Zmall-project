import {
  useLazyGetEachChatQuery,
  useSendMessageMutation,
} from '@/store/Chat.api';
import { IEachMessage, IElem } from '@/types';
import { useLocalStorage } from '@/utils';
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
  const [file, setFile] = useState('');

  console.log(data?.chat?.advertisement, 'dddd');
  console.log(id, 'id');

  useEffect(() => {
    getEachChat(id);
  }, [id]);

  const inputHandler = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setValue(e.target.value);
  };

  const currentUser = useLocalStorage('auth', {});
  const token = currentUser.map((item) => item?.token)[0];

  // const myMessage: IEachMessage = {
  //   ads_id: data?.chat?.advertisement,
  //   chat_id: id,
  //   message: value,
  //   file: file,
  // };\

  console.log(token);

  const onChangeFile = async (e) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    // const aidar = 'aidar';

    formData.append('ads_id', data?.chat?.advertisement);
    formData.append('chat_id', id);
    // formData.append('message', value);
    formData.append('file', file);

    // const trash = formData.getAll('chat_id');
    // console.log(trash, 'ss');
    // console.log(file);
    // formData.append('file', file);

    const mockData = {
      ads_id: data?.chat?.advertisement,
      chat_id: id,
      message: value,
      // file: file,
    };
    // await sendMessage(mockData);

    // console.log(formData, 'form');
    await sendMessage(formData);
    setValue('');
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
            <input type="file" id="file" onChange={onChangeFile} />
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
