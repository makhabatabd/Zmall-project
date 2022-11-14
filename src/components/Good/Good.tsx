import React, { useEffect, useState } from 'react';
import {
  Title,
  Card,
  Price,
  Category,
  Description,
  Iconwrap,
} from './Good.style';
import Image from 'next/image';
import { IResult } from '../../types';
import {
  useAddFavoritesMutation,
  useDeleteFavoritesMutation,
} from '@/store/favoritesSlice';

interface IProps {
  item: IResult;
}

const Good = ({ item }: IProps) => {
  const [fav, setFav] = useState<boolean>(false);
  const [addFavorites] = useAddFavoritesMutation();
  const [deleteFavorites] = useDeleteFavoritesMutation();
  // const { data } = useGetFavoritesQuery();

  return (
    <>
      <Card>
        <Image width={248} height={186} src="/good.png" alt="goodimage" />
        <Description>
          <Price>{item.price} ₸</Price>
          <Title>{item.name}</Title>
          <Category>{item.child_category}</Category>
        </Description>
        {fav ? (
          <Iconwrap
            onClick={() => {
              addFavorites(item.id);
            }}
          >
            <Image width={32} height={32} src="/fromfav.svg" alt="fav" />
          </Iconwrap>
        ) : (
          <Iconwrap
            onClick={() => {
              deleteFavorites(item.id);
            }}
          >
            <Image width={40} height={40} src="/tofav.svg" alt="fav" />
          </Iconwrap>
        )}
      </Card>
    </>
  );
};

export default Good;
