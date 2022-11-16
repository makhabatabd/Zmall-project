import {
  useAddFavoritesMutation,
  useDeleteFavoritesMutation,
  useLazyGetFavoritesQuery,
} from '@/store/favoritesSlice';
import { IResult } from '@/types';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import {
  Container,
  FavoriteBlock,
  ItemDate,
  ItemDescription,
  ItemLocation,
  ItemPrice,
  ItemTitle,
  ListItem,
  ListItemRightBlock,
  ListItems,
  ListWrapper,
  StyledImage,
} from './ListCard.style';

interface IProps {
  id: number;
  price: string | number;
  title?: string;
  description: string;
  date?: string;
  location?: string;
  category: string;
  image?: string;
  is_favorite: boolean;
}

export const ListCard = ({
  id,
  price,
  title,
  description,
  date,
  location,
  category,
  image,
  is_favorite,
}: IProps) => {
  const [addFavorites] = useAddFavoritesMutation();
  const [deleteFavorites] = useDeleteFavoritesMutation();
  const [trigger, { data: result }] = useLazyGetFavoritesQuery();

  const [isProdFav, setIsProdFav] = useState(is_favorite);

  useEffect(() => {
    trigger();
  }, []);

  useEffect(() => {
    if (result?.results) {
      setIsProdFav(result.results.some((elem: IResult) => elem.id === id));
    }
  }, [result?.count]);

  return (
    <Container>
      <ListWrapper>
        <div>
          <StyledImage src={image} />
        </div>
        <ListItems>
          <ListItem>
            <ItemPrice>{price} T</ItemPrice>
            <ItemTitle>{title}</ItemTitle>
            <ItemDescription>{description}</ItemDescription>
            <ItemDate>{date}</ItemDate>
          </ListItem>
          <ListItemRightBlock>
            <ItemLocation>{category}</ItemLocation>
            <ItemLocation>{location}</ItemLocation>
          </ListItemRightBlock>
          <FavoriteBlock>
            {isProdFav && (
              <Image
                src="/icons/card/favorite.svg"
                alt="favorite"
                width={32}
                height={32}
                onClick={async () => {
                  await deleteFavorites(id);
                  const isFav = isProdFav;
                  setIsProdFav(!isFav);
                }}
              />
            )}
            {!isProdFav && (
              <Image
                src="/icons/card/unfavorite.svg"
                alt="favorite"
                width={32}
                height={32}
                onClick={async () => {
                  await addFavorites(id);
                  const isFav = isProdFav;
                  setIsProdFav(!isFav);
                }}
              />
            )}
          </FavoriteBlock>
        </ListItems>
      </ListWrapper>
    </Container>
  );
};
