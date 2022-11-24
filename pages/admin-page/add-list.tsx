import React from 'react';
import { AdminPageSection } from '@/components/AdminPage/AdminPage.style';
import AdminPageNavBar from '@/components/AdminPage/AdminPageNavBar';
import AddListComponent from '@/components/AdminPage/AddList/AddListComponent';
import { IServerResponse } from '@/types';
import { GetServerSideProps } from 'next';
import { getCategories, getData } from '@/api';

export interface IProps {
  result: IServerResponse;
  page: number;
  limit: number;
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

const AddList = ({ result, page, limit }: IProps) => {
  return (
    <AdminPageSection>
      <AdminPageNavBar  pageName={"add-list"} element={<AddListComponent result={result} page={page} limit={limit}/>}/>
    </AdminPageSection>
  );
};

export default AddList;