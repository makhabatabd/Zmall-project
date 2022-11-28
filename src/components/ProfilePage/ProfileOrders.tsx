import { useGetUsersOrdersQuery } from '@/store/profile.api';
import React from 'react';
import { Container } from '../Styles/sharedstyles';
import {
  Cell,
  Heading,
  SkeletonTable,
  Table,
  TableWrapper,
} from './ProfilePage.style';
import { ProfileEmptyData } from './ProfileEmptyAdverts';

export const ProfileOrders = () => {
  const { data } = useGetUsersOrdersQuery();

  const heading = [
    'Выделение цветом',
    'Выделение цветом',
    'Добавление стикера Срочно',
    'Добавление стикера Срочно',
    'Выделение цветом',
    'Добавление стикера Срочно',
    'Выделение цветом',
    'Добавление стикера Срочно',
    'Выделение цветом',
    'Добавление стикера Срочно',
  ];

  return (
    <TableWrapper>
      <Container>
        {data && data?.results.length === 0 ? (
          <ProfileEmptyData title="История транзакций пуста" />
        ) : data && data?.results.length > 0 ? (
          <Table>
            <Heading black>
              <Cell>Тип рекламы</Cell>
              <Cell>Объявление </Cell>
              <Cell>Дата</Cell>
              <Cell>Сумма</Cell>
            </Heading>
            {data &&
              data?.results.map((item, index) => (
                <Heading key={index}>
                  <Cell>{heading[index]}</Cell>
                  <Cell>Продажа</Cell>
                  <Cell>{item.start_date}</Cell>
                  <Cell>{item.pg_amount}</Cell>
                </Heading>
              ))}
          </Table>
        ) : (
          <SkeletonTable />
        )}
      </Container>
    </TableWrapper>
  );
};
