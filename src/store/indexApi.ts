import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
export const useMockApi = localStorage.getItem('useMockApi') === null ? true : localStorage.getItem('useMockApi') === 'true';

const baseQuery = fetchBaseQuery({
  baseUrl: useMockApi ? 'http://localhost:3000/api'  : 'http://localhost:3000/',
  credentials: 'include',
});



export const Api = createApi({
  reducerPath: 'indexAPI',
  baseQuery,
  endpoints: () => ({}),
  tagTypes: [],
});
