import React from 'react';
import HelpPage from '@/components/HelpPage/HelpPage';
import { GetServerSideProps } from 'next';
import { getHelp } from '@/api';
import { IHelpData } from '@/types';

interface IProps {
  data: IHelpData;
}

export const getServerSideProps: GetServerSideProps = async () => {
  const helpData = await getHelp();

  return {
    props: {
      data: helpData,
    },
  };
};

const Help = ({ data }: IProps) => {
  return <HelpPage data={data} />;
};

export default Help;
