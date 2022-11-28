import React from 'react';
import { getCategories, getData } from '@/api';
import { IServerResponse } from '@/types';
import { CategoryList } from '@/components/Categories/CategoryList';
import { MainPage } from '@/components/MainPage/MainPage';
import { GetServerSideProps } from 'next';

export interface IProps {
<<<<<<< HEAD
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

=======
  result?: IServerResponse;
  data?: IResponseCategories;
  page?: number;
  limit?: number;
  active?: number;
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const response = await getData(context.query.offset, context.query.limit);
  const categories = await getCategories();
>>>>>>> 9161591bc32039e60f123d2d536910bd5236adf3
  return {
    props: {
      result: response,
      data: categories,
<<<<<<< HEAD
      page: context.query.offset || 0,
=======
      page: context.query.offset || 10,
>>>>>>> 9161591bc32039e60f123d2d536910bd5236adf3
      limit: context.query.limit || 10,
    },
  };
};

<<<<<<< HEAD
const Home = ({ result, page, limit }: IProps) => {
  return (
    <>
      <CategoryList />
=======
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

const Home = ({ result, data, page, limit }: IProps) => {
  return (
    <>
      <CategoryList data={data} />
>>>>>>> 9161591bc32039e60f123d2d536910bd5236adf3
      <MainPage result={result} page={page} limit={limit} />
    </>
  );
};

export default Home;
