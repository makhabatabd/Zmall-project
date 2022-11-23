import { Authbutton } from '@/ui/auth/button/Authbutton';
import { Forminput } from '@/ui/auth/forminput/Forminput';
import React, { useState } from 'react';
import { useFormik } from 'formik';
import {
  Agreement,
  Form,
  ModalButton,
  ModalInner,
  ModalOutter,
  ModalText,
  SignupForm,
  Subtitle,
} from './AuthPage.style';
import { ISignUp } from '@/types';
import { SignUpValidate } from '@/validation';
import { useRegisterMutation } from '@/store/authSlice';

export const Signup = () => {
  const [register] = useRegisterMutation();
  const [err, setErr] = useState('');
  const [info, setInfo] = useState(false);
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      username: '',
      password_confirm: '',
      lastName: '',
      phone: '',
      checked: false,
    },
    validate: SignUpValidate,
    onSubmit,
  });

  async function registerUser(values: ISignUp) {
    try {
      await register({
        email: values.email,
        first_name: values.username,
        last_name: values.lastName,
        phone_number: values.phone,
        password: values.password,
        password_confirm: values.password_confirm,
      }).unwrap();
      localStorage.setItem(
        'currentUser',
        JSON.stringify({
          email: values.email,
        })
      );
      formik.resetForm();
      setInfo(true);
      values.checked = false;
      setErr('');
      console.log(values, 'eferf');
    } catch (error: typeof error) {
      error?.data?.errors &&
        Object.values(error?.data?.errors).map((item) => setErr(item));
    }
  }

  async function onSubmit(values: ISignUp) {
    registerUser(values);
    console.log(values, 'submit');
  }
  return (
    <SignupForm>
      <Form
        onSubmit={formik.handleSubmit}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            formik.handleSubmit();
          }
        }}
      >
        <Subtitle>Регистрация</Subtitle>
        {info && (
          <ModalOutter onClick={() => setInfo(false)}>
            <ModalInner>
              <ModalText>
                Спаисибо, теперь вы можете войти на наш сайт! Thank you, now you
                can sign in to our website!
              </ModalText>
              <ModalButton onClick={() => setInfo(false)}>OK</ModalButton>
            </ModalInner>
          </ModalOutter>
        )}
        {err && <p style={{ color: 'red' }}>{err}</p>}
        <Forminput
          onChange={formik.handleChange}
          value={formik.values.lastName}
          placeholder="Фамилия"
          name="lastName"
          type="text"
        />
        {formik.errors.lastName && formik.touched.lastName && (
          <span style={{ color: 'red' }}>{formik.errors.lastName}</span>
        )}
        <Forminput
          onChange={formik.handleChange}
          value={formik.values.username}
          placeholder="Имя"
          name="username"
          type="text"
        />
        {formik.errors.username && formik.touched.username && (
          <span style={{ color: 'red' }}>{formik.errors.username}</span>
        )}
        <Forminput
          onChange={formik.handleChange}
          value={formik.values.phone}
          placeholder="Номер телефона"
          name="phone"
          type="text"
        />
        {formik.errors.phone && formik.touched.phone && (
          <span style={{ color: 'red' }}>{formik.errors.phone}</span>
        )}
        <Forminput
          onChange={formik.handleChange}
          value={formik.values.email}
          placeholder="Электронная почта"
          name="email"
          type="email"
        />
        {formik.errors.email && formik.touched.email && (
          <span style={{ color: 'red' }}>{formik.errors.email}</span>
        )}
        <Forminput
          onChange={formik.handleChange}
          value={formik.values.password}
          placeholder="Пароль"
          name="password"
          type="password"
        />
        {formik.errors.password && formik.touched.password && (
          <span style={{ color: 'red' }}>{formik.errors.password}</span>
        )}
        <Forminput
          onChange={formik.handleChange}
          value={formik.values.password_confirm}
          placeholder="Повторите пароль"
          name="password_confirm"
          type="password"
        />
        {formik.errors.password_confirm && formik.touched.password_confirm && (
          <span style={{ color: 'red' }}>{formik.errors.password_confirm}</span>
        )}
        <Agreement>
          <input
            type="checkbox"
            name="checked"
            value={formik.values.checked}
            onChange={formik.handleChange}
          />
          <p>
            Я соглашаюсь с <a href="link">правилами использования сервиса</a>, а
            также с передачей и обработкой моих данных.
          </p>
        </Agreement>
        {formik.errors.checked && formik.touched.checked && (
          <span style={{ color: 'red' }}>{formik.errors.checked}</span>
        )}
        <Authbutton type="submit" background={'#2a2349'} width={'100%'}>
          зарегистрироваться
        </Authbutton>
      </Form>
    </SignupForm>
  );
};
