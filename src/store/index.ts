import { configureStore } from '@reduxjs/toolkit'
import { createWrapper } from 'next-redux-wrapper'

import { aboutAPI } from '@/services/aboutAPI'
import { contactAPI } from '@/services/contactAPI'

import rootReducer from './rootReducer'

export const makeStore = () =>
  configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware: any) =>
      getDefaultMiddleware({}).concat([aboutAPI.middleware, contactAPI.middleware]),
    devTools: process.env.NODE_ENV !== 'production',
  } as any)

export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']

export const wrapper = createWrapper<AppStore>(makeStore, {
  debug: process.env.NODE_ENV !== 'production',
})
