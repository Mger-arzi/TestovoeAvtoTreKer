import { configureStore } from '@reduxjs/toolkit'
import { autoTrekApi } from './autoTrek.services'


export const store = configureStore({
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(autoTrekApi.middleware),
  reducer: {
    [autoTrekApi.reducerPath]: autoTrekApi.reducer,
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
