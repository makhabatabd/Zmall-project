import React from 'react';
import { Container } from '../Styles/sharedstyles';
import CategoryItem from './CategoryItem/CategoryItem';
import { Bg, Wrapper } from './CategoryList.style';

export const CategoryList = () => {
  const categories = [
    {
      id: 1,
      name: 'building',
    },
    {
      id: 2,
      name: 'transport',
    },
    {
      id: 3,
      name: 'electronics',
    },
    {
      id: 4,
      name: 'business',
    },
    {
      id: 5,
      name: 'personal stuff',
    },
    {
      id: 6,
      name: 'house',
    },
    {
      id: 7,
      name: 'children world',
    },
    {
      id: 8,
      name: 'animals',
    },
    {
      id: 9,
      name: 'services',
    },
    {
      id: 10,
      name: 'sport',
    },
  ];
  return (
    <>
      <Bg>
        <Container>
          <Wrapper>
            {categories.map((item) => (
              <CategoryItem key={item.id} item={item} />
            ))}
          </Wrapper>
        </Container>
      </Bg>
    </>
  );
};
