import Image from 'next/image';
import React, { useState } from 'react';
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
  price,
  title,
  description,
  date,
  location,
  category,
  image,
  is_favorite,
}: IProps) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const favoriteHandler = () => {
    setIsFavorite(!isFavorite);
  };
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
            {is_favorite && (
              <Image
                src="/icons/card/favorite.svg"
                alt="favorite"
                width={32}
                height={32}
                onClick={favoriteHandler}
              />
            )}
            {!is_favorite && (
              <Image
                src="/icons/card/unfavorite.svg"
                alt="favorite"
                width={32}
                height={32}
                onClick={favoriteHandler}
              />
            )}
          </FavoriteBlock>
        </ListItems>
      </ListWrapper>
    </Container>
  );
};
