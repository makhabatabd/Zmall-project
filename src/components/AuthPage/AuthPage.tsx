import Image from 'next/image';
import React from 'react';
import { Close, Container, Line, Title, Wrapper } from './AuthPage.style';
import { Login } from './Login';
import { Signup } from './SignUp';

export const AuthPage = () => {
  return (
    <Container>
      <Close>
        <Image src="/icons/close.svg" alt="close" width={32} height={32} />
      </Close>
      <Title>Zmall</Title>
      <Wrapper>
        <Signup />
        <Line />
        <Login />
      </Wrapper>
    </Container>
  );
};
