import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { AutoTrek, Item } from '../autoTrek.api'

export const autoTrekApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://gps.autotracker.group',
    credentials: 'include',
  }),
  endpoints: builder => {
    return {
      login: builder.query<AutoTrek, unknown | void>({
        query: arg => ({
          method: 'GET',
          params: arg ?? undefined,
          url: '/api/devices',
        }),
      }),
      postAutoTrek: builder.mutation<Item, unknown>({
        query: args => ({
          body: args,
          method: 'POST',
          url: `api/devices`,
        }),
      }),
      deleteAutoTrek: builder.mutation<unknown, { id: number }>({
        query: ({ id }) => ({
          method: 'DELETE',
          url: `/api/devices/${id}`,
        }),
      }),

    }

  },
})

export const {
  useLoginQuery,
  usePostAutoTrekMutation,
  useDeleteAutoTrekMutation,
} = autoTrekApi