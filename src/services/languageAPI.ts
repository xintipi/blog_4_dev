import { createApi } from '@reduxjs/toolkit/query/react'
import { HYDRATE } from 'next-redux-wrapper'

import { Languages } from '@/lib/notion/interface'
import axiosBaseQuery from '@/services/index'

export const LANGUAGES_API_REDUCER_KEY = 'languageAPI'

export const languageAPI = createApi({
  reducerPath: LANGUAGES_API_REDUCER_KEY,
  baseQuery: axiosBaseQuery({
    baseUrl: 'http://localhost:3000/api',
  }),
  extractRehydrationInfo(action, { reducerPath }) {
    if (action.type === HYDRATE) {
      return action.payload[reducerPath]
    }
  },
  endpoints: (builder) => ({
    getLanguageList: builder.query<Languages[], void>({
      query: () => {
        return {
          url: 'language',
          method: 'GET',
        }
      },
    }),
  }),
})

// export hooks for useage in functional components
export const { useGetLanguageListQuery } = languageAPI

// export endpoints for use in SSR
export const { getLanguageList } = languageAPI.endpoints
