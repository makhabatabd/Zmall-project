import DetailsPage from '@/components/DetailsPage/DetailsPage';
import React from 'react';
import axios from 'axios';
import { DetailsData, DetailsPageProps, Similar } from '@/types';

export default function Detail({ data, similar }: DetailsPageProps) {
  return <DetailsPage data={data} similar={similar} />;
}

export async function getServerSideProps(context: { query: { id: number } }) {
  const res = await axios.get<DetailsData>(
    `http://188.225.83.42:8001/api/v1/advertisement/${context.query.id}`
  );

  const similar = await axios.get<Similar>(
    `http://188.225.83.42:8001/api/v1/advertisement/simular/${res.data.id}`
  );

  return { props: { data: res.data, similar: similar.data } };
}
