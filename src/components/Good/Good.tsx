import React, { useEffect, useState } from 'react';
import {
  Title,
  Card,
  Price,
  Category,
  Description,
  Iconwrap,
  IconwrapLoading,
} from './Good.style';
import Image from 'next/image';
import { IResult } from '@/types';
import {
  useAddFavoritesMutation,
  useDeleteFavoritesMutation,
  useLazyGetFavoritesQuery,
} from '@/store/favoritesSlice';

interface IProps {
  item: IResult;
}

const Good = ({ item }: IProps) => {
  const [addFavorites, { isLoading }] = useAddFavoritesMutation();
  const [deleteFavorites, { isLoading: gui }] = useDeleteFavoritesMutation();
  const [trigger, { data }] = useLazyGetFavoritesQuery();
  const [isProdFav, setIsProdFav] = useState(false);

  useEffect(() => {
    trigger();
  }, []);

  useEffect(() => {
    if (data?.results) {
      setIsProdFav(data.results.some((elem: IResult) => elem.id === item.id));
    }
  }, [data?.count]);

  return (
    <>
      <Card>
        <Image width={248} height={186} src="/main/good.png" alt="goodimage" />
        <Description>
          <Price>{item.price} ₸</Price>
          <Title>{item.name}</Title>
          <Category>{item.child_category}</Category>
        </Description>
        {isProdFav ? (
          gui ? (
            <IconwrapLoading>
              <Image
                width={32}
                height={32}
                src="/icons/card/favorite.svg"
                alt="fav"
              />
            </IconwrapLoading>
          ) : (
            <Iconwrap
              onClick={async () => {
                await deleteFavorites(item.id);
                // trigger();
                const isFav = isProdFav;
                setIsProdFav(!isFav);
              }}
            >
              <Image
                width={32}
                height={32}
                src="/icons/card/favorite.svg"
                alt="fav"
              />
            </Iconwrap>
          )
        ) : isLoading ? (
          <IconwrapLoading>
            <Image
              width={40}
              height={40}
              src="/icons/card/unfavorite.svg"
              alt="fav"
            />
          </IconwrapLoading>
        ) : (
          <Iconwrap
            onClick={async () => {
              await addFavorites(item.id);
              const isFav = isProdFav;
              setIsProdFav(!isFav);
            }}
          >
            <Image
              width={40}
              height={40}
              src="/icons/card/unfavorite.svg"
              alt="fav"
            />
          </Iconwrap>
        )}
      </Card>
    </>
  );
};

export default Good;
