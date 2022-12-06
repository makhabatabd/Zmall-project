import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export interface CategoriesResult {
  id: number;
  name: string;
  icon: string;
  ads_count: number;
}

export interface ICategoriesResponse {
  count: number;
  next?: string;
  previous?: string;
  results: CategoriesResult[];
}

export interface ChildCategory {
  id: number;
  name: string;
  category: string;
  ads_count: number;
}

export interface ICategoryResponse {
  id: number;
  name: string;
  icon: string;
  child_category: ChildCategory[];
}

export interface CitiesResult {
  id: number;
  name: string;
}

export interface ICitiesResponse {
  count: number;
  next?: string;
  previous?: string;
  results: CitiesResult[];
}

export const addAdvertising = createApi({
  reducerPath: 'addAdvertising',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://188.225.83.42:8001/api/v1/advertisement/',
  }),
  endpoints: (builder) => ({
    getCategories: builder.query<ICategoriesResponse, string>({
      query: () => 'categories/',
    }),
    getSubcategory: builder.query<ICategoryResponse, number>({
      query: (id: number) => `category/${id}`,
    }),
    getCities: builder.query<ICitiesResponse, string>({
      query: () => 'cities/',
    }),
    postAdvertising: builder.mutation({
      query: (data) => ({
        url: 'create/',
        method: 'POST',
        body: data,
        headers: {
          Authorization:
            'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjY5ODE5NDEwLCJpYXQiOjE2Njk3ODM0MTAsImp0aSI6Ijk0MTViMTAxNWY4YTQ1ZmJiNjkxYTUyNDlhNWQ3ZTA1IiwidXNlcl9pZCI6MzN9.2o9LEwm6ZOtV2_XmGOXQw2zTEOygK6vs_Kt8mU32yKM',
        },
      }),
    }),
  }),
});

export const {
  useGetCategoriesQuery,
  useGetSubcategoryQuery,
  useGetCitiesQuery,
  usePostAdvertisingMutation,
} = addAdvertising;
