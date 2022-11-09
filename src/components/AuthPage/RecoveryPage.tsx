import React from 'react';
import { Close, Container, RecoverWrapper, Title } from './AuthPage.style';
import Image from 'next/image';
import { Authbutton } from '../../ui/auth/button/Authbutton';
import { Forminput } from '../../ui/auth/forminput/Forminput';

export const RecoveryPage = () => {
  return (
    <Container>
      <Close>
        <Image src="/icons/close.svg" alt="close" width={32} height={32} />
      </Close>
      <Title>Zmall</Title>
      <RecoverWrapper>
        <h4>
          Для смены пароля укажите вашу электронную почту, на которую придёт
          письмо с инструкцией
        </h4>
        <div>
          <Forminput
            placeholder="Электронная почта"
            type="email"
            name="email"
          />
          <Authbutton width={'50%'} background={'#2A2349'}>
            восстановить пароль
          </Authbutton>
        </div>
      </RecoverWrapper>
    </Container>
  );
};
