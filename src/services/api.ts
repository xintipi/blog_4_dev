import { createApi } from '@reduxjs/toolkit/query/react'
import { HYDRATE } from 'next-redux-wrapper'

import { NEXT_PUBLIC_API_URL } from '@/lib/constants'
import axiosBaseQuery from '@/services/config'

type IServiceApi = {
  reducerPath: string
  tagTypes?: string[]
}

export const api = ({ reducerPath, tagTypes }: IServiceApi) => {
  return createApi({
    reducerPath,
    tagTypes,
    refetchOnMountOrArgChange: 900,
    baseQuery: axiosBaseQuery({
      baseUrl: NEXT_PUBLIC_API_URL as string,
    }),
    extractRehydrationInfo(action, { reducerPath }) {
      if (action.type === HYDRATE) {
        return action.payload[reducerPath]
      }
    },
    endpoints: () => ({}),
  })
}
