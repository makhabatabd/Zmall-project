import React from 'react';
import { EmptyImage, Title } from './ProfilePage.style';

export const ProfileEmptyData = ({ title }: { title: string }) => {
  return (
    <>
      <Title>{title}</Title>
      <EmptyImage src="/user/empty.svg" alt="User" width={300} height={350} />
    </>
  );
};
