import { ILanguages } from '@/interface/about.interface'
import * as responses from '@/interface/responseNotion.interface'
import { PageObject, QueryDatabaseResponse } from '@/interface/responseNotion.interface'
import { api } from '@/services/api'

export const ABOUT_API_REDUCER_KEY = 'aboutAPI'

export const aboutAPI = api({
  reducerPath: ABOUT_API_REDUCER_KEY,
}).injectEndpoints({
  endpoints: (builder) => ({
    getLanguageList: builder.query<ILanguages[], void>({
      query: () => ({
        url: 'language',
        method: 'GET',
      }),
      transformResponse: (response: QueryDatabaseResponse, args, meta) => {
        return response.results
          .filter((pageObject: PageObject) => _validPageObject(pageObject))
          .map((pageObject: PageObject) => _transformData(pageObject)) as ILanguages[]
      },
    }),
  }),
})

function _validPageObject(pageObject: responses.PageObject) {
  return pageObject.properties
}

function _transformData(pageObject: responses.PageObject) {
  const prop = pageObject.properties

  return {
    id: pageObject.id,
    source_target: prop.Source.url,
    title: (prop.Title.rich_text as any)[0].plain_text,
    path_img: prop.Image.url,
  }
}

// export hooks for useage in functional components
export const { useGetLanguageListQuery, usePrefetch } = aboutAPI

// export endpoints for use in SSR
export const { getLanguageList } = aboutAPI.endpoints
