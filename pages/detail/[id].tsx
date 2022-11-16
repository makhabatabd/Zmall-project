import DetailsPage from '@/components/DetailsPage/DetailsPage';
import React, { Key } from 'react';
import axios from 'axios';

export interface DetailsData {
  id: number;
  name: string;
  slug: string;
  price: number;
  max_price: null;
  description: string;
  email: null;
  phone_numbers: string[];
  whatsapp_number: string;
  type: string;
  views_count: number;
  phone_view_count: number;
  created_at: string;
  modified_at: string;
  disable_date: null;
  category: string;
  childCategory: string;
  subscribers: ISubscribers[];
  is_favorite: boolean;
  owner: Owner;
  images: IImages[];
  comments: [];
}

interface ISubscribers {
  id: Key | null | undefined;
  end_date: string;
  start_date: string;
  subscription: string;
}

export interface IImages {
  id?: number;
  image?: string | null | undefined;
}

export interface Owner {
  id: number;
  email: string;
  phone_number: string;
  first_name: string;
  last_name: string;
}

export interface DetailsPageProps {
  data?: DetailsData;
  similar?: Similar;
}

export interface Similar {
  count: number;
  results: DetailsData[];
}

// export interface Result {
//   id: number;
//   name: string;
//   slug: string;
//   price: number;
//   max_price: null;
//   description: string;
//   email: null;
//   phone_numbers: null;
//   whatsapp_number: string;
//   type: string;
//   views_count: number;
//   phone_view_count: number;
//   created_at: string;
//   modified_at: string;
//   disable_date: null;
//   category: string;
//   child_category: string;
//   subscribers: ISubscribers[];
//   is_favorite: boolean;
//   owner: Owner;
//   images: IImages[];
//   comments: [];
// }

// export interface Owner {
//   id: number;
//   email: string;
//   phone_number: string;
//   first_name: string;
//   last_name: string;
// }

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
