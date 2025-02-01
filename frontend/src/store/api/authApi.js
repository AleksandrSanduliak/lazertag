import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const backendBaseUrl = 'http://localhost:3000/api/auth/'

export const authApi = createApi({
  reducerPath: 'auth',
  baseQuery: fetchBaseQuery({ baseUrl: backendBaseUrl }),
  endpoints: (builder) => ({
    authRegisterUser: builder.mutation({
     query: () => ({
        url: `register`,
        method: 'POST',
        body: '',
      }),
    }),
  }),
})


export const { useAuthRegisterUserMutation } = authApi