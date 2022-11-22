import Statistics from '@/components/StatisticModal/Statistics';
import Image from 'next/image';
import React, { useState } from 'react';
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
  price: number;
  title: string;
  publication_date: string;
  image: any;
  contacts: number;
  views: number;
  category: string;
  statistics: boolean;
  setStatictics: (statistics: boolean) => void;
}

export const ActiveListCard = ({
  price,
  title,
  publication_date,
  views,
  category,
  contacts,
  image,
  setStatictics,
  statistics,
}: IProps) => {
  return (
    <Container>
      <ListWrapper>
        <div>
          {image ? (
            <StyledImage src={image} />
          ) : (
            <Image
              width={248}
              height={184}
              src="/main/good.png"
              alt="goodimage"
            />
          )}
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
            <AdvertiseButton onClick={() => setStatictics(!statistics)}>
              рекламировать
            </AdvertiseButton>
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
