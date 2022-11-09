import Image from 'next/image';
import React from 'react';
import {
  ActiveItemCategory,
  ActiveItemPublication,
  ActiveItemRightBlock,
  ActiveItemTitle,
  ActiveItemViews,
  AdvertiseButton,
  Container,
  ItemPrice,
  ListItem,
  ListItems,
  ListWrapper,
  StyledImage,
} from './ListCard.style';

interface IProps {
  price: string;
  title: string;
  publication_date: string;
  image: string;
  contacts: string;
  views: string;
  category: string;
}

export const ActiveListCard = ({
  price,
  title,
  publication_date,
  views,
  category,
  contacts,
  image,
}: IProps) => {
  return (
    <Container>
      <ListWrapper>
        <div>
          <StyledImage src={image} />
        </div>
        <ListItems>
          <ListItem>
            <ItemPrice>{price} T</ItemPrice>
            <ActiveItemTitle>{title}</ActiveItemTitle>
            <ActiveItemCategory>{category}</ActiveItemCategory>
            <ActiveItemPublication>
              Дата публикации: {publication_date}
            </ActiveItemPublication>
            <ActiveItemViews>
              <span>Просмотры: {views}</span>
              <span>Контакты: {contacts}</span>
            </ActiveItemViews>
            <AdvertiseButton>рекламировать</AdvertiseButton>
          </ListItem>
          <ActiveItemRightBlock>
            <p>
              <Image src="/icons/edit.svg" alt="edit" width={22} height={22} />
              <span>Редактировать</span>
            </p>
            <p>
              <Image
                src="/icons/delete.svg"
                alt="edit"
                width={22}
                height={22}
              />
              <span> Деактивировать</span>
            </p>
            <p>
              <Image
                src="/icons/static.svg"
                alt="edit"
                width={22}
                height={22}
              />
              <span>Статистика</span>
            </p>
          </ActiveItemRightBlock>
        </ListItems>
      </ListWrapper>
    </Container>
  );
};
