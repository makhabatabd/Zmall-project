import { DetailsPageProps } from '@/../pages/detail/[id]';
import {
  useAddFavoritesMutation,
  useDeleteFavoritesMutation,
  useLazyGetFavoritesQuery,
} from '@/store/favoritesSlice';
import { IResult } from '@/types';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
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
  IconLoading,
  IconwrapStyle,
  PriceTitle,
  RightBlock,
  TextButton,
  WriteButton,
} from './Details.style';

export const DetailContact = ({ data }: DetailsPageProps) => {
  const [showContacts, setShowContacts] = useState(false);
  const [addFavorites, { isLoading }] = useAddFavoritesMutation();
  const [deleteFavorites, { isLoading: gui }] = useDeleteFavoritesMutation();
  const [trigger, { data: result }] = useLazyGetFavoritesQuery();
  console.log(result);

  const [isProdFav, setIsProdFav] = useState(false);

  useEffect(() => {
    trigger();
  }, []);

  useEffect(() => {
    if (result?.results) {
      setIsProdFav(
        result.results.some((elem: IResult) => elem.id === data?.id)
      );
    }
  }, [result?.count]);

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
            {isProdFav ? (
              gui ? (
                <IconLoading>
                  <Image
                    width={32}
                    height={32}
                    src="/icons/card/favorite.svg"
                    alt="fav"
                  />
                </IconLoading>
              ) : (
                <IconwrapStyle
                  onClick={async () => {
                    await deleteFavorites(data?.id);
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
                </IconwrapStyle>
              )
            ) : isLoading ? (
              <IconLoading>
                <Image
                  width={40}
                  height={40}
                  src="/icons/card/unfavorite.svg"
                  alt="fav"
                />
              </IconLoading>
            ) : (
              <IconwrapStyle
                onClick={async () => {
                  await addFavorites(data?.id);
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
              </IconwrapStyle>
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
              href={`https://wa.me/${data?.whatsapp_number}`}
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
