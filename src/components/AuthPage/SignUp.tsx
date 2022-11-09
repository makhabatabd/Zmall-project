import { Authbutton } from '@/ui/auth/button/Authbutton';
import { Forminput } from '@/ui/auth/forminput/Forminput';
import React from 'react';
import { Agreement, Form, SignupForm, Subtitle } from './AuthPage.style';
// import { Agreement, Form, SignupForm, Subtitle } from './AuthPage.style';

const signupInputData = [
  {
    type: 'text',
    name: 'last_name',
    placeholder: 'Фамилия',
  },
  {
    type: 'text',
    name: 'first_name',
    placeholder: 'Имя',
  },
  {
    type: 'text',
    name: 'phone',
    placeholder: 'Номер телефона',
  },
  {
    type: 'email',
    name: 'email',
    placeholder: 'Электронная почта',
  },
  {
    type: 'password',
    name: 'password',
    placeholder: 'Пароль',
  },
  {
    type: 'password_confirm',
    name: 'password',
    placeholder: 'Повторите пароль',
  },
];

export const Signup = () => {
  return (
    <SignupForm>
      <Form>
        <Subtitle>Регистрация</Subtitle>
        {signupInputData.map((value, idx) => (
          <Forminput
            key={idx}
            placeholder={value.placeholder}
            name={value.name}
            type={value.type}
          />
        ))}
      </Form>
      <Agreement>
        <input type="checkbox" />
        <p>
          Я соглашаюсь с <a href="link">правилами использования сервиса</a>, а
          также с передачей и обработкой моих данных.
        </p>
      </Agreement>
      <Authbutton background={'#2a2349'} width={'100%'}>
        зарегистрироваться
      </Authbutton>
    </SignupForm>
  );
};
