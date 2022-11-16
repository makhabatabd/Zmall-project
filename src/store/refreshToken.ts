import { BASE_URL } from './../api';
import { fetchBaseQuery } from '@reduxjs/toolkit/query';
import type {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
} from '@reduxjs/toolkit/query';
import { Mutex } from 'async-mutex';
const mutex = new Mutex();
const baseUrl = BASE_URL;
const baseQuery = fetchBaseQuery({ baseUrl });

export const customFetchBase: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  await mutex.waitForUnlock();
  let result = await baseQuery(args, api, extraOptions);
  if (result.error && result.error.status === 401) {
    if (!mutex.isLocked()) {
      const release = await mutex.acquire();
      try {
        const auth =
          localStorage.getItem('auth') &&
          JSON.parse(localStorage.getItem('auth') || '');
        const refreshResult = await baseQuery(
          {
            url: '/token/refresh/',
            method: 'POST',
            body: JSON.stringify({
              refresh: auth.refresh,
            }),
            headers: {
              'Content-Type': 'application/json',
            },
          },
          api,
          extraOptions
        );
        console.log('REFRESH', refreshResult);
        
        if (refreshResult.data) {
          const data = JSON.stringify(refreshResult.data);
          const { access } = JSON.parse(data);
          auth.token = access;
          localStorage.setItem('auth', JSON.stringify(auth));
          console.log('dddddddddddfsfsdfsdfsdfdsfsdfsd', access);
          
          const headers = {
            Authorization: 'Bearer ' + String(access),
            'Content-Type': 'application/json',
          };
          if (typeof args !== 'string') {
            return (result = await baseQuery(
              { ...args, headers },
              api,
              extraOptions
            ));
          }
        }
        result = refreshResult;
      } finally {
        release();
        await mutex.waitForUnlock();
      }
    }
  }
  return result;
};
