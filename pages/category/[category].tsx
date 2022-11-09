import { Subcategory } from '@/components/Categories/CategoryItem/CategoryItem.style';
import { CategoryList } from '@/components/Categories/CategoryList';
import React from 'react';

export default function Category() {
  return (
    <>
      <CategoryList />
      <Subcategory />
    </>
  );
}
