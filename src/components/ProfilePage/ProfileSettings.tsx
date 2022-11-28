import React, { useState } from 'react';
import { Container } from '../Styles/sharedstyles';
import { ProfileBody, Wrapper } from './ProfilePage.style';
import { useFormik } from 'formik';
import { Forminput } from '@/ui/auth/forminput/Forminput';
import { Authbutton } from '@/ui/auth/button/Authbutton';
import { ProfileDataValidate } from '@/validation';
import { ISignUp } from '@/types';
import {
  Form,
  ModalButton,
  ModalInner,
  ModalOutter,
  ModalText,
  SignupForm,
  Subtitle,
} from '../AuthPage/AuthPage.style';
import {
  useEditUsersDataMutation,
  useGetUsersDataQuery,
} from '@/store/profile.api';

export const ProfileSettings = () => {
  const [err, setErr] = useState('');
  const [info, setInfo] = useState(false);

  const { data: usersData } = useGetUsersDataQuery();
  const [editUsersData] = useEditUsersDataMutation();

  const onSubmit = async (values: ISignUp) => {
    editUser(values);
  };

  const formik = useFormik({
    initialValues: {
      email: usersData?.email || '',
      password: '',
      username: usersData?.first_name || '',
      password_confirm: '',
      lastName: usersData?.last_name || '',
      phone: usersData?.phone_number || '',
    },
    validate: ProfileDataValidate,
    onSubmit: onSubmit,
  });

  const editUser = async (values: ISignUp) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const response: any = await editUsersData({
      email: values.email,
      first_name: values.username,
      last_name: values.lastName,
      phone_number: values.phone,
      password: values.password,
    });
    if (response?.data) {
      setInfo(true);
      setErr('');
    } else {
      const error = Object.values(response?.error?.data?.errors)[0] as [];
      error.map((item: string) => setErr(item));
    }
  };

  return (
    <Wrapper white bottom top>
      <Container>
        <ProfileBody>
          <SignupForm>
            <Form
              onSubmit={formik.handleSubmit}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  formik.handleSubmit();
                }
              }}
            >
              <Subtitle>Данные профиля</Subtitle>
              {info && (
                <ModalOutter onClick={() => setInfo(false)}>
                  <ModalInner>
                    <ModalText>Вы успешно поменяли данные!</ModalText>
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
              {formik.errors.password_confirm &&
                formik.touched.password_confirm && (
                  <span style={{ color: 'red' }}>
                    {formik.errors.password_confirm}
                  </span>
                )}
              <Authbutton type="submit" background={'#2a2349'} width={'100%'}>
                Cохранить
              </Authbutton>
            </Form>
          </SignupForm>
        </ProfileBody>
      </Container>
    </Wrapper>
  );
};
