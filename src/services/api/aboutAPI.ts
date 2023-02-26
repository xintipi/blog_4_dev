import { ILanguageResponse, ILanguageSchema } from '@/interface/about.interface'
import { api } from '@/services/api'

export const ABOUT_API_REDUCER_KEY = 'aboutAPI'

export const aboutAPI = api({
  reducerPath: ABOUT_API_REDUCER_KEY,
}).injectEndpoints({
  endpoints: (builder) => ({
    getLanguageList: builder.query<ILanguageResponse[], void>({
      query: () => ({
        url: '/language',
        method: 'GET',
      }),
      // @ts-ignore
      transformResponse: (response: ILanguageSchema[], args, meta) => {
        try {
          return response.map((pageObject) => _transformData(pageObject))
        } catch (error) {
          return error
        }
      },
    }),
  }),
})

function _transformData(pageObject: ILanguageSchema): ILanguageResponse {
  return {
    id: pageObject._id,
    source_target: pageObject.sourceTarget,
    title: pageObject.title,
    path_img: pageObject.pathImg,
    created_at: pageObject.createdAt,
  }
}

// export hooks for useage in functional components
export const { useGetLanguageListQuery, usePrefetch } = aboutAPI

// export endpoints for use in SSR
export const { getLanguageList } = aboutAPI.endpoints
