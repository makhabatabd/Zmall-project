import React, { useState } from 'react';
import {
  Button,
  InputField,
  Select,
  StyledTextarea,
  Text,
  Title,
  Wrapper,
  WrapperInner,
  ErrorText,
} from './Contact.style';
import axios from 'axios';
import { BreadCrumbs } from '../BreadCrumbs/BreadCrumbs';

const ContactPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [text, setText] = useState('');
  const [error, setError] = useState({
    email: '',
    name: '',
    subject: '',
    text: '',
  });
  const sendData = () => {
    axios
      .post('http://188.225.83.42:8001/api/v1/site/feedback/', {
        name,
        email,
        subject,
        text,
      })
      .then(() => (window.location.pathname = '/success'))
      .catch((e) =>
        setError({
          email: e.response.data.errors.email
            ? e.response.data.errors.email[0]
            : '',
          name: e.response.data.errors.name
            ? e.response.data.errors.name[0]
            : '',
          subject: e.response.data.errors.subject
            ? e.response.data.errors.subject[0]
            : '',
          text: e.response.data.errors.text
            ? e.response.data.errors.text[0]
            : '',
        })
      );
  };
  console.log(error?.email);
  return (
    <Wrapper>
      <BreadCrumbs />
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
        {error?.name && <ErrorText>{error.name}</ErrorText>}
        <InputField
          style={error?.name ? { border: '1px solid red' } : {}}
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Ваше имя"
        />
        {error?.email && <ErrorText>{error.email}</ErrorText>}
        <InputField
          style={error?.email ? { border: '1px solid red' } : {}}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Ваш email"
        />
        {error?.subject && <ErrorText>{error.subject}</ErrorText>}
        <Select
          style={error?.subject ? { border: '1px solid red' } : {}}
          onChange={(e) => setSubject(e.target.value)}
        >
          <option value="" hidden>
            Тема сообщения
          </option>
          <option value="жалоба">Жалоба</option>
          <option value="предложение">Предложение</option>
        </Select>
        {error?.text && <ErrorText>{error.text}</ErrorText>}
        <StyledTextarea
          style={error?.text ? { border: '1px solid red' } : {}}
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Вашe сообщение"
        />
        <Button onClick={sendData} type="button">
          отправить сообщение
        </Button>
      </WrapperInner>
    </Wrapper>
  );
};

export default ContactPage;
