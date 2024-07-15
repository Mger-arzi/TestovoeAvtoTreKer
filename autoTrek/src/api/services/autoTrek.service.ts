import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { AutoTrek, Item } from '../autoTrek.api'
import { FormValues } from '@/components/login-form/login-form'


export const autoTrekApi = createApi({
  reducerPath: 'autoTrekApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://gps.autotracker.group',
    credentials: 'include',
  }),
  endpoints: builder => ({
    login: builder.query<AutoTrek, void>({
      query: () => ({
        method: 'GET',
        url: '/api/devices',
      }),
    }),
    postAutoTrek: builder.mutation<Item, FormValues>({
      query: args => ({
        body: args,
        method: 'POST',
        url: `api/devices`,
      }),
    }),
    deleteAutoTrek: builder.mutation<void, { id: number }>({
      query: ({ id }) => ({
        method: 'DELETE',
        url: `/api/devices/${id}`,
      }),
    }),

  }

  ),
})

export const {
  useLoginQuery,
  usePostAutoTrekMutation,
  useDeleteAutoTrekMutation,
} = autoTrekApi

