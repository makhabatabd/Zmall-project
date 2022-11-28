import React from 'react';
import { getCategories, getData } from '@/api';
import { IServerResponse } from '@/types';
import { CategoryList } from '@/components/Categories/CategoryList';
import { MainPage } from '@/components/MainPage/MainPage';
import { GetServerSideProps } from 'next';

export interface IProps {
  result: IServerResponse;
  page: number;
  limit: number;
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const response = await getData(
    context.query.offset || '0',
    context.query.limit || '10'
  );
  const categories = await getCategories();

  return {
    props: {
      result: response,
      data: categories,
      page: context.query.offset || 0,
      limit: context.query.limit || 10,
    },
  };
};

const Home = ({ result, page, limit }: IProps) => {
  return (
    <>
      <CategoryList />
      <MainPage result={result} page={page} limit={limit} />
    </>
  );
};

export default Home;
