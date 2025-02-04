import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { logout, setUser } from 'store/slices/authSlice';

const backendBaseUrl = 'http://localhost:3000/api/auth/';

const baseQuery = fetchBaseQuery({
  baseUrl: backendBaseUrl,
  credentials: 'include',
  mode: 'cors',
  redirect: 'follow',
  prepareHeaders: (headers) => {
    headers.set('Access-Control-Allow-Credentials', '*');
    const accessToken = document.cookie.split('accessToken=')[1];
    if (accessToken) {
      headers.set('Authorization', `Bearer ${accessToken}`);
    }
    return headers;
  },
});

const baseQueryReAuth = async (args, api, extraOptions) => {
  const result = await baseQuery(args, api, extraOptions);
  console.log('result', result.meta.response.status);
  if (result.meta.response.status === 401) {
    const refreshRes = await baseQuery('/refresh', api, extraOptions);
    if (refreshRes?.data) {
      const user = api.getState().auth.user;
      api.dispatch(setUser(user));
    } else {
      api.dispatch(logout());
    }
  }
  return result;
};

export const authApi = createApi({
  reducerPath: 'auth',
  baseQuery: baseQueryReAuth,
  endpoints: (builder) => ({
    authRegisterUser: builder.mutation({
      query: (inputValues) => ({
        url: `register`,
        method: 'POST',
        body: inputValues,
        mode: 'cors',
      }),
    }),
    authLoginUser: builder.mutation({
      query: (data) => ({
        credentials: 'include',
        url: 'login',
        method: 'POST',
        body: data,
        mode: 'cors',
      }),
      async onQueryStarted({ data }, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          console.log('data', data);
          console.log('setUser', setUser);
          dispatch(setUser(data));
        } catch (e) {
          console.log(e);
        }
      },
    }),
    refreshToken: builder.query({
      query: () => ({
        credentials: 'include',
        url: 'refresh',
        method: 'GET',
        mode: 'cors',
      }),
      async onQueryStarted(args, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(setUser(data));
        } catch (e) {
          console.log(e);
        }
      },
    }),
  }),
});

export const { useAuthRegisterUserMutation, useAuthLoginUserMutation, useLazyRefreshTokenQuery } =
  authApi;
