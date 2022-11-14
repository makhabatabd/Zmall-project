import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://188.225.83.42:8001/api/v1/advertisement/',
    headers: {
        'Content-Type': 'application/json',
    },
});

export async function getData(page?: string | string[] | undefined, limit?: string | string[] | undefined) {
    const response = await instance.get(`list/?limit=${limit}&offset=${page}`);
    return response.data;
}

export async function getCategories(){
    const response = await instance.get(`categories`)
    return response.data
}