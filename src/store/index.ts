import { configureStore } from '@reduxjs/toolkit'
import { createWrapper } from 'next-redux-wrapper'

import { aboutAPI } from '@/services/api/aboutAPI'
import { contactAPI } from '@/services/api/contactAPI'
import { projectAPI } from '@/services/api/projectAPI'

import rootReducer from './rootReducer'

export const makeStore = () =>
  configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware: any) =>
      getDefaultMiddleware({}).concat([
        aboutAPI.middleware,
        contactAPI.middleware,
        projectAPI.middleware,
      ]),
    devTools: process.env.NODE_ENV !== 'production',
  } as any)

export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']

export const wrapper = createWrapper<AppStore>(makeStore)
