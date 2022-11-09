import React from 'react';
import {
  Button,
  InputField,
  Select,
  StyledTextarea,
  Text,
  Title,
  Wrapper,
  WrapperInner,
} from './Contact.style';

const ContactPage = () => {
  return (
    <Wrapper>
      <WrapperInner>
        <Title>Связаться с администрацией</Title>
        <Text>
          Администрация вправе вносить изменения и/или дополнения в настоящие
          Правила в одностороннем порядке без какого-либо специального
          уведомления Пользователей. Пользователь обязуется регулярно проверять
          условия настоящих Правил на предмет их изменения и/или дополнения.
          Продолжение использования Сервиса Пользователем после внесения
          изменений и/или дополнений в настоящие Правила означает принятие их
          Пользователем и его согласие с такими изменениями и/или дополнениями.
        </Text>
        <InputField placeholder="Ваше имя" />
        <InputField placeholder="Ваш email" />
        <Select>
          <option value="" hidden>
            Тема сообщения
          </option>
          <option value="1">Blalala</option>
          <option value="2">Blallala</option>
          <option value="3">Citroen</option>
          <option value="4">Ford</option>
        </Select>
        <StyledTextarea placeholder="Вашe сообщение" />
        <Button>отправить сообщение</Button>
      </WrapperInner>
    </Wrapper>
  );
};

export default ContactPage;
