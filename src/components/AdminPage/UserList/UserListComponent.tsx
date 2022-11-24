import React, { useEffect } from 'react';
import { Container } from '@/components/Styles/sharedstyles';
import {
  UserListContainer,
  UserListItem,
  UserListUlInfo,
  UserListUlTittles,
} from '@/components/AdminPage/UserList/UserList.style';
import { Delete } from '@/components/AdminPage/svg';
import { getUsersData } from '@/api';
import { useAppDispatch, useAppSelector } from '@/hooks';
import { addToStoreUsers, selectAdminState } from '@/store/adminSlice';

interface IUsers {
  id: number;
  email: string;
  phone_number: string;
  first_name: string;
  last_name: string;
}

const UserListComponent = () => {
  const data = useAppSelector(selectAdminState);
  const dispatch = useAppDispatch();

  const fetchingUsers = async () => {
    const token = JSON.parse(localStorage?.getItem('auth') as string);
    const result = await getUsersData(token);
    dispatch(addToStoreUsers(result?.results));
  };

  useEffect(() => {
    fetchingUsers();
  }, []);

  // const pageHandler = (page: number, limit: number) => {
  //   router.push({
  //     pathname: router.pathname,
  //     query: { limit: limit, offset: page },
  //   });
  // };

  return (
    <Container>
      <UserListContainer>
        <UserListUlTittles>
          <UserListItem className="id">ID</UserListItem>
          <UserListItem className="name">Имя</UserListItem>
          <UserListItem className="last-name">Фамилия</UserListItem>
          <UserListItem className="email">Email</UserListItem>
          <UserListItem className="button">Удалить</UserListItem>
        </UserListUlTittles>

        {data?.users.map((it: IUsers) => {
          return (
            <UserListUlInfo key={it.id}>
              <UserListItem className="id">{it.id}</UserListItem>
              <UserListItem className="name">{it.first_name}</UserListItem>
              <UserListItem className="last-name">{it.last_name}</UserListItem>
              <UserListItem className="email">{it.email}</UserListItem>
              <UserListItem className="button">
                {' '}
                <svg className="icon"> {Delete}</svg>
              </UserListItem>
            </UserListUlInfo>
          );
        })}
      </UserListContainer>
    </Container>
  );
};

export default UserListComponent;
