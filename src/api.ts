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

<<<<<<< HEAD
export const BASE_URL = 'http://188.225.83.42:8001/api/v1/';

export async function getCategories() {
  const response = await instance.get(`categories`);
  return response.data;
}

export async function getHelp() {
  const response = await axios(
    'http://188.225.83.42:8001/api/v1/site/help-category/'
=======
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
  console.log('CITIES', cities);

  if (price !== '0') {
    const response = await instance.get(
      `list/?offset=${offset}&category_id=${id}${
        price !== '0' ? `&price=${price}` : '0'
      }${max_price !== '0' ? `&max_price=${max_price}` : '0'}${
        cities !== '0' ? `&cities=${cities}` : '0'
      }${has_image && `&has_image=${has_image}`}`
    );
    return response.data;
  }

  const response = await instance.get(
    `list/?offset=${offset}&category_id=${id}`
>>>>>>> 9161591bc32039e60f123d2d536910bd5236adf3
  );
  return response.data;
}

<<<<<<< HEAD
export async function getOneHelp(id: number) {
  const response = await axios(
    `http://188.225.83.42:8001/api/v1/site/help-category/?limit=1&offset=${id}`
  );
  return response.data;
}

export async function getHelpDetail(id: string | number) {
  const response = await axios(
    `http://188.225.83.42:8001/api/v1/site/help/${id}/`
  );
  return response.data;
}

export async function getAdminComplains(token: { token: string }) {
  console.log(token, 'api');
  try {
    const response = await axios.get(
      `http://188.225.83.42:8001/api/v1/admin/feedback/`,
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + token?.token,
        },
      }
    );
    return response.data;
  } catch (e) {
    console.log('huy');
    return { huy: 'huy' };
  }
}
export async function getUsersData(token: { token: string }) {
  const response = await axios.get(
    `http://188.225.83.42:8001/api/v1/admin/users`,
    {
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + token?.token,
      },
    }
=======
// has_image && `&has_image=${has_image}`
// !!Number(price) ? null : +`&price=${price}`
// !!Number(max_price) ? null : +`&max_price=${max_price}`
// !!Number(cities) ? null : +`&cities=${cities}`
// Number(has_image) ? null : +`&has_image=${has_image}`

export async function getResults({
  sub = '1',
  id = '1',
}: {
  sub: string;
  id: string;
}) {
  const response = await instance.get(
    `list/?child_category_id=${sub}&category_id=${id} `
>>>>>>> 9161591bc32039e60f123d2d536910bd5236adf3
  );
  return response.data;
}
