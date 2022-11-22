import { useGetUsersOrdersQuery } from '@/store/profile.api';
import React from 'react';

export const ProfileOrders = () => {
  const { data } = useGetUsersOrdersQuery();
  console.log(data, 'orders');

  return <div>
    <div>Тип </div>
  </div>;
};
