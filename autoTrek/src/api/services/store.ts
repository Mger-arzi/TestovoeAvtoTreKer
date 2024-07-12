import { configureStore } from '@reduxjs/toolkit'
import { autoTrekApi } from './autoTrek.services'
import { appReducer } from '../../app/app-slice'


export const store = configureStore({
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(autoTrekApi.middleware),
  reducer: {
    app: appReducer,
    [autoTrekApi.reducerPath]: autoTrekApi.reducer,
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
