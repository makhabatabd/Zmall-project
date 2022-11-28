import React from 'react';
import { Container } from '../Styles/sharedstyles';
import CategoryItem from './CategoryItem/CategoryItem';
import { Bg, Wrapper } from './CategoryList.style';
import { IResponseCategories } from '../../../pages';

interface IProps {
  data: IResponseCategories;
  active: string;
}

export const CategoryList = ({ data, active }: IProps) => {
  return (
    <>
      <Bg>
        <Container>
          <Wrapper>
            {data?.results.map((item) => (
              <CategoryItem key={item.id} item={item} active={active} />
            ))}
          </Wrapper>
        </Container>
      </Bg>
    </>
  );
};
