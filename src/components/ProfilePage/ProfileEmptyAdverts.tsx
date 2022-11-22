import React from 'react';
import { EmptyImage, Title } from './ProfilePage.style';

export const ProfileEmptyAdverts = () => {
  return (
    <>
      <Title>Список объявлений пустой</Title>
      <EmptyImage src="/user/empty.svg" alt="User" width={300} height={350} />
    </>
  );
};
