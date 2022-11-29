import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const addAdvertising = createApi({
  reducerPath: 'addAdvertising',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://188.225.83.42:8001/api/v1/advertisement/',
  }),
  endpoints: (builder) => ({
    getCategories: builder.query({
      query: () => 'categories/',
    }),
    getSubcategory: builder.query({
      query: (id) => `category/${id}`,
    }),
    getCities: builder.query({
      query: () => 'cities/',
    }),
    addAdvertising: builder.mutation({
      query: (data) => ({
        url: 'create/',
        method: 'POST',
        body: data,
      }),
    }),
  }),
});

export const {
  useGetCategoriesQuery,
  useGetSubcategoryQuery,
  useGetCitiesQuery,
  useAddAdvertisingMutation,
} = addAdvertising;
