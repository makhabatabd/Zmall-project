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
  price: string;
  title: string;
  description: string;
  date: string;
  location: string;
  category: string;
  image: string;
}

export const ListCard = ({
  price,
  title,
  description,
  date,
  location,
  category,
  image,
}: IProps) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const favoriteHandler = () => {
    setIsFavorite(!isFavorite);
  };
  return (
    <Container>
      <ListWrapper>
        <div>
          <StyledImage src={image ? image : "/main/good.png"} />
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
            {isFavorite && (
              <Image
                src="/icons/card/favorite.svg"
                alt="favorite"
                width={32}
                height={32}
                onClick={favoriteHandler}
              />
            )}
            {!isFavorite && (
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
