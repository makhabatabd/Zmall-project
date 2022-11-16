import React from 'react';
import HelpDetailPage from '@/components/HelpDetailPage/HelpDetailPage';
import { GetServerSideProps } from 'next';
import { getHelpDetail, getOneHelp } from '@/api';
import { IHelpData, IHelpDetail } from '@/types';

interface IProps {
  data:IHelpDetail
  category: IHelpData
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const detailData = await getHelpDetail( context?.query?.id   );
  const helpCategory = await getOneHelp(detailData.category - 1)


  return {
    props: {
      data: detailData,
      category: helpCategory
    },
  };
};




const HelpDetail = ({ data, category}: IProps) => {

  return <HelpDetailPage detailData={data} category={category} />;
};

export default HelpDetail;
