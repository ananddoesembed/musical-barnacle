import { configureStore } from '@reduxjs/toolkit';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { animeSlice } from './animeReducer';

export const animeApi = createApi({
  reducerPath: 'animeApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://anime-db.p.rapidapi.com',
    prepareHeaders: (headers, { getState }) => {
      headers.set(
        'X-RapidAPI-Key',
        import.meta.env.VITE_RAPID_API_KEY as string
      );
      headers.set(
        'X-RapidAPI-Host',
        import.meta.env.VITE_RAPID_API_HOST as string
      );
      return headers;
    },
  }),
  tagTypes: ['Anime'],

  endpoints: (builder) => ({
    getAllAnime: builder.query<any, { page: string; size: string }>({
      query: (arg) => {
        return {
          url: '/anime',
          method: 'GET',
          params: {
            page: arg.page,
            size: arg.size,
          },
        };
      },
      providesTags: [{ type: 'Anime', id: 'LIST' }],
    }),
  }),
});
export const store = configureStore({
  reducer: {
    [animeSlice.name]: animeSlice.reducer,
    [animeApi.reducerPath]: animeApi.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
