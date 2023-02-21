import { ILanguages } from '@/interface/about.interface'
import { api } from '@/services/api'

export const ABOUT_API_REDUCER_KEY = 'aboutAPI'

export const aboutAPI = api({
  reducerPath: ABOUT_API_REDUCER_KEY,
  tagTypes: ['About'],
}).injectEndpoints({
  endpoints: (builder) => ({
    getLanguageList: builder.query<ILanguages[], void>({
      query: () => ({
        url: 'language',
        method: 'GET',
      }),
      providesTags: [{ type: 'About', id: 'id' }],
    }),
  }),
})

// export hooks for useage in functional components
export const { useGetLanguageListQuery } = aboutAPI

// export endpoints for use in SSR
export const { getLanguageList } = aboutAPI.endpoints
