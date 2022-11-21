import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import {Item, Title} from './CategoryItem.style';

interface IProps {
    item: IObject;
    active: string;
}

interface IObject {
    name: string;
    id: number;
}

const CategoryItem = ({item, active}: IProps) => {
    return (
        <>
            <Item currentId={item.id} active={active}>
                <Link href={`/categories/${item.id}`}>
                    <Image src="/main/building.svg" alt="icon" width={48} height={48}/>
                    <Title>{item.name}</Title>
                </Link>
            </Item>
        </>
    );
};

export default CategoryItem;
