import { DetailsPageProps } from '@/../pages/detail/[id]';
import Image from 'next/image';
import React, { useState } from 'react';
import {
  Client,
  ClientContact,
  ClientContacts,
  ClientContactShow,
  ClientName,
  ClientNumber,
  ClientNumbers,
  ClientPhone,
  ClientTop,
  FavoriteWrapper,
  FavText,
  FavWrapper,
  PriceTitle,
  RightBlock,
  TextButton,
  WriteButton,
} from './Details.style';

export const DetailContact = ({ data }: DetailsPageProps) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [showContacts, setShowContacts] = useState(false);

  const onAddToFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  const toggleShowContacts = () => {
    setShowContacts(!showContacts);
  };

  const hideNumber = (num: string) => {
    return num?.slice(0, -6) + 'xxxxxx';
  };

  return (
    <div>
      <RightBlock>
        <FavoriteWrapper>
          <FavWrapper>
            {data?.is_favorite ? (
              <Image
                src="/icons/card/favorite.svg"
                width={32}
                height={32}
                alt="heart-icon"
                onClick={onAddToFavorite}
              />
            ) : (
              <Image
                src="/icons/card/unfavorite.svg"
                width={32}
                height={36}
                alt="heart-icon"
                onClick={onAddToFavorite}
              />
            )}
          </FavWrapper>
          <FavText>Добавить в избранное</FavText>
        </FavoriteWrapper>
        <PriceTitle>{data?.price} ₸</PriceTitle>
        <Client>
          <ClientTop>
            <Image
              src="/details/avatar.svg"
              alt="avatar"
              width={64}
              height={64}
            />
            <ClientName>
              {data?.owner.first_name} {data?.owner.last_name}
            </ClientName>
          </ClientTop>
          <ClientContacts>Контакты продавца</ClientContacts>

          <ClientContactShow onClick={toggleShowContacts}>
            {!showContacts ? (
              <span>показать контакты</span>
            ) : (
              <span>скрыть контакты</span>
            )}
          </ClientContactShow>
          <ClientContact>
            <ClientPhone>Телефон:</ClientPhone>

            <ClientNumbers>
              {data?.phone_numbers?.map((number: string, i: number) => (
                <ClientNumber key={i}>
                  {showContacts ? number : hideNumber(number)}
                </ClientNumber>
              ))}
            </ClientNumbers>
          </ClientContact>
          <ClientContact>
            <ClientPhone>WhatsApp:</ClientPhone>
            <ClientNumbers>
              <ClientNumber>
                {showContacts
                  ? data?.whatsapp_number
                  : hideNumber(data?.whatsapp_number || '')}
              </ClientNumber>
            </ClientNumbers>
          </ClientContact>
          <WriteButton>
            <Image
              src="/details/write-icon.svg"
              width={26}
              height={32}
              alt="icon"
            />
            <a
              href={`https://wa.me/${data?.whatsapp_number}`}
              target={'_blank'}
              rel="noreferrer"
            >
              написать продавцу
            </a>
          </WriteButton>
          <TextButton>
            <Image
              src="/details/white-wa.svg"
              width={26}
              height={32}
              alt="icon"
            />
            <a
              href="https://api.whatsapp.com/send?phone=15551234567"
              target={'_blank'}
              rel="noreferrer"
            >
              написать на whatsapp
            </a>
          </TextButton>
        </Client>
      </RightBlock>
    </div>
  );
};
