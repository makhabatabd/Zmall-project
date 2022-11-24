import Image from 'next/image';
import React from 'react';
import { Close, Container, Line, Title, Wrapper } from './AuthPage.style';
export const AuthPage = () => {
  return (
    <Container>
      <Close>
        <Image src="/icons/close.svg" alt="close" width={32} height={32} />
      </Close>
      <Title>Zmall</Title>
      <Wrapper>
        <Line />
      </Wrapper>
    </Container>
  );
};
