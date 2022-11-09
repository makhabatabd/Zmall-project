import Link from 'next/link';
import React, { useState } from 'react';
import Image from 'next/image';
import { Item, Title } from './CategoryItem.style';

interface IProps {
  item: IObject;
}

interface IObject {
  name: string;
  id: number;
}

const CategoryItem = ({ item }: IProps) => {
  const [active, setActive] = useState<boolean>(false);
  const activeHandler = () => {
    setActive(!active);
    // console.log(item.name);
  };

  return (
    <>
      <Item onClick={activeHandler}>
        <Link href={`/category/${item.name}`}>
          <Image src="/building.svg" alt="icon" width={48} height={48} />
          <Title>{item.name}</Title>
        </Link>
      </Item>
    </>
  );
};

export default CategoryItem;
