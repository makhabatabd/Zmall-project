import { CategoryList } from '@/components/Categories/CategoryList';
import Subcategory from '@/components/Categories/Subcategory/Subcategory';
import React, { useEffect } from 'react';
import { ListItem } from '@/components/HorizontalCard/ListItem';
import { GetServerSideProps } from 'next';
import { getCategories, getCategory, getCategoryById, getResults } from '@/api';
import { IResponseCategories } from '../index';
import { useAppDispatch } from '@/hooks';
import { addResults } from '@/store/mainSlice';
import { IServerResponse } from '@/types';

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.query;
  const categories = await getCategories(); // for category items example: building, electricity
  const data = await getCategoryById(id); // for getting subcategory data by category id
  const category = await getCategory(context.query); // for getting ads by category id
  const result = await getResults(context.query); // for getting ads by subcategory id
  // console.log(context);
  return {
    props: {
      id: context.query.id || null,
      sub: context.query.sub || null,
      offset: context.query.offset || 0,
      price: context.query.price || 0,
      category: data,
      categories: categories,
      activeItem: context.query.id || 1,
      result: result,
      categoryId: category,
    },
  };
};

export interface ChildCategory {
  id: number;
  name: string;
  category: string;
  ads_count: number;
}

export interface IResponseCategory {
  id: number;
  name: string;
  icon: string;
  child_category: ChildCategory[];
}

interface IProps {
  id: string;
  sub: string;
  offset: string;
  price: string;
  category?: IResponseCategory;
  categories?: IResponseCategories;
  activeItem?: string;
  result?: IServerResponse;
  categoryId: IServerResponse;
}

export default function Category({
  id,
  sub,
  price,
  offset,
  category,
  categories,
  activeItem,
  result,
  categoryId,
}: IProps) {
  const dispatch = useAppDispatch();
  useEffect(() => {
    sub ? dispatch(addResults(result)) : dispatch(addResults(categoryId));
  }, [sub, id, offset, price]);

  return (
    <>
      <CategoryList data={categories} active={activeItem} />
      <Subcategory item={category} />
      <ListItem sub={sub} id={id} />
    </>
  );
}
