import { createApi } from '@reduxjs/toolkit/query/react'
import { HYDRATE } from 'next-redux-wrapper'

import { ILanguages } from '@/interface/about.interface'
import axiosBaseQuery from '@/services/index'

export const ABOUT_API_REDUCER_KEY = 'aboutAPI'

export const aboutAPI = createApi({
  reducerPath: ABOUT_API_REDUCER_KEY,
  baseQuery: axiosBaseQuery({ baseUrl: 'http://localhost:3000/api' }),
  extractRehydrationInfo(action, { reducerPath }) {
    if (action.type === HYDRATE) {
      return action.payload[reducerPath]
    }
  },
  endpoints: (builder) => ({
    getLanguageList: builder.query<ILanguages[], void>({
      query: () => ({
        url: 'language',
        method: 'GET',
      }),
    }),
  }),
})

// export hooks for useage in functional components
export const { useGetLanguageListQuery } = aboutAPI

// export endpoints for use in SSR
export const { getLanguageList } = aboutAPI.endpoints
