import React from 'react';
import Image from 'next/image';
import { Forminput } from '@/ui/auth/forminput/Forminput';
import { Authbutton } from '@/ui/auth/button/Authbutton';
import { AuthLink, Form, LoginForm, Subtitle } from './AuthPage.style';
import { useSession, signIn } from 'next-auth/react';
const loginInputData = [
  {
    type: 'email',
    name: 'last_name',
    placeholder: 'Электронная почта',
  },
  {
    type: 'password',
    name: 'password',
    placeholder: 'Пароль',
  },
];

async function handleGoogleSignin() {
  console.log(1);
  signIn('google', { callbackUrl: 'http://localhost:3000' });
}

async function handleFacebookSignin() {
  console.log(2);
  signIn('facebook', { callbackUrl: 'http://localhost:3000' });
}

export const Login = () => {
  const { data: session } = useSession();
  console.log(session);
  return (
    <LoginForm>
      <Form>
        <Subtitle>Вход</Subtitle>
        {loginInputData.map((value, idx) => (
          <Forminput
            key={idx}
            placeholder={value.placeholder}
            name={value.name}
            type={value.type}
          />
        ))}
      </Form>

      <div>
        <p>
          <AuthLink href="/">Забыли пароль?</AuthLink>
        </p>
        <Authbutton background={'#2a2349'} width={'50%'}>
          Войти
        </Authbutton>
        <p>или сделайте вход используя социальные сети</p>
        <Authbutton
          onClick={handleFacebookSignin}
          background={'#4267B2'}
          width={'100%'}
        >
          <Image
            src="/icons/facebook.svg"
            alt="facebook"
            width={16}
            height={30}
          />
          Войти через Facebook
        </Authbutton>
        <Authbutton
          onClick={handleGoogleSignin}
          background={'#EA4335'}
          width={'100%'}
        >
          <Image src="/icons/gmail.svg" alt="gmail" width={30} height={30} />
          Войти через Google
        </Authbutton>
      </div>
    </LoginForm>
  );
};
