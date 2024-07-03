import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const autoTrekApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://gps.autotracker.group',
    credentials: 'include',
  }),
  endpoints: builder => {
    return {
      getAutoTrek: builder.query<unknown, unknown | void>({
        query: arg => ({
          method: 'GET',
          params: arg ?? undefined,
          url: 'api/devices',
        }),
      }),
      postAutoTrek: builder.mutation<void, unknown>({
        query: args => ({
          body: args,
          method: 'POST',
          url: `api/devices`,
        }),
      }),
      deliteAutoTrek: builder.mutation<void, unknown>({
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
  useGetAutoTrekQuery,
  usePostAutoTrekMutation,
  useDeliteAutoTrekMutation,
} = autoTrekApi
