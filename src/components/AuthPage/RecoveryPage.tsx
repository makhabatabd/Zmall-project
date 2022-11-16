import React, { useState } from 'react';
import {
  Close,
  Container,
  ModalButton,
  ModalInner,
  ModalOutter,
  ModalText,
  RecoverWrapper,
  Title,
} from './AuthPage.style';
import Image from 'next/image';
import { Authbutton } from '../../ui/auth/button/Authbutton';
import { Forminput } from '../../ui/auth/forminput/Forminput';

export const RecoveryPage = () => {
  const [restoreError, setRestoreError] = useState(false);
  const [restoreEmail, setRestoreEmail] = useState('');
  const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
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
            onChange={(e) => setRestoreEmail(e.target.value)}
          />
          <Authbutton
            disabled={emailValid.test(restoreEmail) ? false : true}
            onClick={() => setRestoreError(true)}
            width={'50%'}
            background={emailValid.test(restoreEmail) ? '#2A2349' : '#D3D3D3'}
          >
            восстановить пароль
          </Authbutton>
        </div>
      </RecoverWrapper>
      {restoreError && (
        <ModalOutter onClick={() => setRestoreError(false)}>
          <ModalInner>
            <ModalText>
              Unfortunately, now, we cannot help you to restore your password!
              Please, try again later! К сожалению, сейчас мы не можем помочь
              вам восстановить пароль! Пожалуйста, попробуйте позже!
            </ModalText>
            <ModalButton onClick={() => setRestoreError(false)}>OK</ModalButton>
          </ModalInner>
        </ModalOutter>
      )}
    </Container>
  );
};
