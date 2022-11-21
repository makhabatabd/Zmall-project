import React from 'react';
import Good from '@/components/Good/Good';
import { Wrapper } from './CategoryGood.style';

const CategoryGood = ({ data }) => {
  return (
    <>
      <Wrapper>
        {data?.results?.results?.map((item) => (
          <Good key={item.id} item={item} />
        ))}
      </Wrapper>
    </>
  );
};

export default CategoryGood;
