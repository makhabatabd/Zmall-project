import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://188.225.83.42:8001/api/v1/advertisement/',
  headers: {
    'Content-Type': 'application/json',
  },
});

export async function getData(
  page?: string | string[] | undefined,
  limit?: string | string[] | undefined
) {
  const response = await instance.get(`list/?limit=${limit}&offset=${page}`);
  return response.data;
}

export async function getCategories() {
  const response = await instance.get(`categories/`);
  return response.data;
}

export async function getCategoryById(id: number) {
  const response = await instance.get(`category/${id}/`);
  return response.data;
}

export async function getCategory({
  id = '1',
  offset = '0',
  price = '0',
  max_price = '0',
  cities = '0',
  has_image = false,
}: {
  id: string;
  offset: string;
  price: string;
  max_price: string;
  cities: string;
  has_image: boolean;
}) {
  const response = await instance.get(
    `list/?offset=${offset}&category_id=${id}`
  );
  return response.data;
}

export async function getResults({
  sub = '1',
  id = '1',
}: // offset = '10',
// limit = '10',
{
  sub: string;
  id: string;
  offset: string;
  limit: string;
}) {
  const response = await instance.get(
    `list/?child_category_id=${sub}&category_id=${id}`
  );
  return response.data;
}
