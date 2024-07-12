
import { PayloadAction, createSlice } from '@reduxjs/toolkit'

const initialState = {
  isInitialized: false,
}

export type AppInitialStateType = typeof initialState

const slice = createSlice({

  initialState,
  name: 'app',
  reducers: {
    setAppInitialized: (state, action: PayloadAction<{ isInitialized: boolean }>) => {
      state.isInitialized = action.payload.isInitialized
    },
  },
})

export const appReducer = slice.reducer
export const appActions = slice.actions
