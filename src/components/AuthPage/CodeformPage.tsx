import React from 'react';
import { Close, ConfirmWrapper, Container, Title } from './AuthPage.style';
import Image from 'next/image';
import { Authbutton } from '@/ui/auth/button/Authbutton';
import { Forminput } from '@/ui/auth/forminput/Forminput';

export const CodeformPage = () => {
  return (
    <Container>
      <Close>
        <Image src="/icons/close.svg" alt="close" width={32} height={32} />
      </Close>
      <Title>Zmall</Title>
      <ConfirmWrapper>
        <h4>Введите код подтверждения, которую получили на почту</h4>
        <div>
          <Forminput placeholder="Код" type="number" name="number" />
          <Authbutton width={'30%'} background={'#2A2349'}>
            Далее
          </Authbutton>
        </div>
      </ConfirmWrapper>
    </Container>
  );
};
