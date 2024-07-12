// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
// import { AutoTrek, Item } from '../autoTrek.api'

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type { Pokemon } from './types'

// Define a service using a base URL and expected endpoints
export const pokemonApi = createApi({
  reducerPath: 'pokemonApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/' }),
  endpoints: (builder) => ({
    getPokemonByName: builder.query<Pokemon, string>({
      query: (name) => `pokemon/${name}`,
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetPokemonByNameQuery } = pokemonApi


// export const autoTrekApi = createApi({
//   reducerPath: 'autoTrekApi',
//   baseQuery: fetchBaseQuery({
//     baseUrl: 'https://gps.autotracker.group',
//     credentials: 'include',
//   }),
//   endpoints: builder => ({
//     login: builder.query<AutoTrek, void>({
//       query: () => ({
//         method: 'GET',
//         url: '/api/devices',
//       }),
//     }),
//     postAutoTrek: builder.mutation<Item, void>({
//       query: args => ({
//         body: args,
//         method: 'POST',
//         url: `api/devices`,
//       }),
//     }),
// deleteAutoTrek: builder.mutation<void, { id: number }>({
//   query: ({ id }) => ({
//     method: 'DELETE',
//     url: `/api/devices/${id}`,
//   }),
// }),

//   }

//   ),
// })

// export const {
//   useLoginQuery,
// usePostAutoTrekMutation,
// useDeleteAutoTrekMutation,
// } = autoTrekApi

