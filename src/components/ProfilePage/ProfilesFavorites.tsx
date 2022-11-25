import { useLazyGetFavoritesQuery } from '@/store/favoritesSlice';
import { IResult } from '@/types';
import React, { useEffect } from 'react';
import Good from '../Good/Good';
import { Mainpage, Subtitle, WrapperArrow } from '../MainPage/MainPage.style';
import { Container } from '../Styles/sharedstyles';
import { ProfileEmptyData } from './ProfileEmptyAdverts';
import { TableWrapper } from './ProfilePage.style';
import TransactionsSkeleton from './TransactionsSkeleton';

export const ProfilesFavorites = () => {
  const [getFavorites, { data }] = useLazyGetFavoritesQuery();
  //console.log('data', data);

  useEffect(() => {
    getFavorites();
  }, []);

  return (
    <TableWrapper onlyBottom>
      <Container>
        {data && data?.results.length === 0 ? (
          <ProfileEmptyData title="У вас нет избранных товаров" />
        ) : data && data?.results.length > 0 ? (
          <>
            <WrapperArrow>
              <Subtitle>Премиум объявления в Казахстане</Subtitle>
              {/* <div>
              <LeftArrow
                onClick={() => pageHandler(parseInt(String(page)) - 10, limit)}
              />
              <RightArrow
                onClick={() => pageHandler(parseInt(String(page)) + 10, limit)}
              />
            </div> */}
            </WrapperArrow>
            <Mainpage>
              {data?.results?.map((item: IResult) => (
                <Good key={item.id} item={item} />
              ))}
            </Mainpage>
          </>
        ) : (
          <TransactionsSkeleton />
        )}
      </Container>
    </TableWrapper>
  );
};
