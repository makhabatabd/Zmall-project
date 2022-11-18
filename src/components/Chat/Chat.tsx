import Image from 'next/image';
import React from 'react';
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
  // add new component my all chats chat-chats
  // get request to get all chats in rtk query
  // при клике отправить запрос chat
  return (
    <>
      <Container>
        <UserInfo>
          <Image src={'/user/user.jpg'} alt="user" width={42} height={42} />
          <p>Alexander Kazantsev</p>
        </UserInfo>
      </Container>
      <Divider />
      <Container>
        <ProductInfo>
          <div>
            <p>Продаётся новая Toyota RAV4 2018 г.в.</p>
            <p>23 000 890 ₸</p>
          </div>
        </ProductInfo>
        <MessagesInfo>
          <p>Сегодня</p>

          <CustomerMessage>Привет</CustomerMessage>

          <MyMessage>Добрый день</MyMessage>
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
