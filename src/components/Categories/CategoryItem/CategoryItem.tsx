import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import { Item, Title } from './CategoryItem.style';
import { useRouter } from 'next/router';

interface IProps {
  item: IObject;
  active: string;
}

interface IObject {
  name: string;
  id: number;
}

const CategoryItem = ({ item, active }: IProps) => {
  const router = useRouter();
  const params = router?.asPath.split('?')[1];
  return (
    <>
      <Item currentId={item.id} active={active}>
        <Link
          href={`/categories/${item.id}${
            params !== undefined ? `?${params}` : ''
          }`}
        >
          <Image src="/main/building.svg" alt="icon" width={48} height={48} />
          <Title>{item.name}</Title>
        </Link>
      </Item>
    </>
  );
};

export default CategoryItem;
