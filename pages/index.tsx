import React from 'react';
import { getCategories, getData } from '@/api';
import { IServerResponse } from '@/types';
import { CategoryList } from '@/components/Categories/CategoryList';
import { MainPage } from '@/components/MainPage/MainPage';
import { GetServerSideProps } from 'next';


export interface Result {
  id: number;
  name: string;
  icon: string;
  ads_count: number;
}

export interface IResponseCategories {
  count: number;
  next?: string | null;
  previous?: string | null;
  results: Result[];
}

export interface IProps {
  result?: IServerResponse;
  data?: IResponseCategories;
  page?: number;
  limit?: number;
  active?: number;
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const response = await getData(context.query.offset, context.query.limit);
  const categories = await getCategories();
  return {
    props: {
      result: response,
      data: categories,
      page: context.query.offset || 10,
      limit: context.query.limit || 10,
    },
  };
};



const Home = ({ result, data, page, limit }: IProps) => {
  return (
    <>
      <CategoryList data={data} />
      <MainPage result={result} page={page} limit={limit} />
    </>
  );
};

export default Home;
