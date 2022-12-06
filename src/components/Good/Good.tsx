import React, { useState } from 'react';
import {
  Title,
  Card,
  Price,
  Category,
  Description,
  Iconwrap,
} from './Good.style';
import Image from 'next/image';
import { IResult } from '@/types';

interface IProps {
  item: IResult;
}

const Good = ({ item }: IProps) => {
  const [fav, setFav] = useState<boolean>(false);
  return (
    <>
      <Card>
        <Image
          width={247}
          height={186}
          src="/main/good.png"
          alt="goodimage"
          className={'image'}
        />
        <Description>
          <Price>{item.price} ₸</Price>
          <Title>{item.name}</Title>
          <Category>{item.child_category}</Category>
        </Description>
        {fav ? (
          <Iconwrap onClick={() => setFav(!fav)}>
            <Image width={32} height={32} src="/main/fromfav.svg" alt="fav" />
          </Iconwrap>
        ) : (
          <Iconwrap onClick={() => setFav(!fav)}>
            <Image width={40} height={40} src="/main/tofav.svg" alt="fav" />
          </Iconwrap>
        )}
      </Card>
    </>
  );
};

export default Good;
