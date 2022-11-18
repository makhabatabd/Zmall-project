import React, { useState } from 'react';
import Image from 'next/image';
import { Forminput } from '@/ui/auth/forminput/Forminput';
import { Authbutton } from '@/ui/auth/button/Authbutton';
import { AuthLink, Form, LoginForm, Subtitle } from './AuthPage.style';
import { signIn, useSession } from 'next-auth/react';
import { useFormik } from 'formik';
import { IValues } from '@/types';
import { useRouter } from 'next/router';
import { LogInValidate } from '@/validation';
import { useGetTokenMutation, useUserLoginMutation } from '@/store/authSlice';
import { useLazyGetMyChannelQuery } from '@/store/Chat.api';
import { useDispatch } from 'react-redux';
import { getChannel } from '@/store/ChatSlice';

export const Login = () => {
  const router = useRouter();
  const { data: session } = useSession();
  const [userLogin] = useUserLoginMutation();
  const [getToken] = useGetTokenMutation();
  const [getMyChannel, { data: channel }] = useLazyGetMyChannelQuery();
  const [err, setErr] = useState('');
  const dispatch = useDispatch();

  async function handleGoogleSignin() {
    signIn('google', { callbackUrl: 'http://localhost:3000' });
    session &&
      localStorage.setItem(
        'currentUser',
        JSON.stringify({
          email: session.user?.email,
        })
      );
  }

  async function handleFacebookSignin() {
    signIn('facebook', { callbackUrl: 'http://localhost:3000' });
    session &&
      localStorage.setItem(
        'currentUser',
        JSON.stringify({
          email: session.user?.email,
        })
      );
  }

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validate: LogInValidate,
    onSubmit,
  });

  const handleGetToken = async (values: IValues) => {
    try {
      const response = await getToken({
        email: values.email,
        password: values.password,
      }).unwrap();
      await getMyChannel(response.access);
      dispatch(getChannel(channel));
      localStorage.setItem(
        'my-channel',
        JSON.stringify({
          channel: channel,
        })
      );
      localStorage.setItem(
        'auth',
        JSON.stringify({
          token: response.access,
          refresh: response.refresh,
        })
      );
    } catch (error: typeof error) {
      error?.data?.errors?.error.map((item: string) => setErr(item));
    }
  };

  const handleLogIn = async (values: IValues) => {
    try {
      await userLogin({
        email: values.email,
        password: values.password,
      }).unwrap();
      await handleGetToken(values);

      localStorage.setItem(
        'currentUser',
        JSON.stringify({
          email: values.email,
        })
      );
      router.push('/');
    } catch (error: typeof error) {
      error?.data?.errors?.error.map((item: string) => setErr(item));
    }
  };

  async function onSubmit(values: IValues) {
    handleLogIn(values);
  }
  return (
    <LoginForm>
      <Form
        onSubmit={formik.handleSubmit}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            formik.handleSubmit();
          }
        }}
      >
        <Subtitle>Вход</Subtitle>
        {err && <p style={{ color: 'red' }}>{err}</p>}
        <Forminput
          placeholder="Электронная почта"
          name="email"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        {formik.errors.email && formik.touched.email && (
          <span style={{ color: 'red' }}>{formik.errors.email}</span>
        )}
        <Forminput
          placeholder="Пароль"
          name="password"
          type="password"
          onChange={formik.handleChange}
          value={formik.values.password}
        />

        {formik.errors.password && formik.touched.password && (
          <span style={{ color: 'red' }}>{formik.errors.password}</span>
        )}
        <p>
          <AuthLink href="/recovery-password">Забыли пароль?</AuthLink>
        </p>
        <Authbutton type="submit" background={'#2a2349'} width={'50%'}>
          Войти
        </Authbutton>
      </Form>
      <div>
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
