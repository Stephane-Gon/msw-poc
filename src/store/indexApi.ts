import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';



const baseQuery = fetchBaseQuery({
  baseUrl: 'http://localhost:3000/',
  credentials: 'include',
});



export const Api = createApi({
  reducerPath: 'indexAPI',
  baseQuery,
  endpoints: () => ({}),
  tagTypes: [],
});
