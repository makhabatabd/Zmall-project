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

export const BASE_URL = 'http://188.225.83.42:8001/api/v1/';

export async function getCategories() {
  const response = await instance.get(`categories`);
  return response.data;
}

export async function getHelp() {
  const response = await axios("http://188.225.83.42:8001/api/v1/site/help-category/")
  return response.data

}

export async function getOneHelp( id: number) {
  const response = await axios(`http://188.225.83.42:8001/api/v1/site/help-category/?limit=1&offset=${id}`)
  return response.data
}

export async function getHelpDetail( id : number | any) {
  const response = await axios(`http://188.225.83.42:8001/api/v1/site/help/${id}/`)
  return response.data
}