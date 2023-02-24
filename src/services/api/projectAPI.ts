import { IProjectList } from '@/interface/portfolio.interface'
import * as responses from '@/interface/responseNotion.interface'
import { PageObject, QueryDatabaseResponse } from '@/interface/responseNotion.interface'
import { _validPageObject } from '@/lib/helps'
import { api } from '@/services/api'

export const PROJECT_API_REDUCER_KEY = 'projectAPI'

export const projectAPI = api({
  reducerPath: PROJECT_API_REDUCER_KEY,
}).injectEndpoints({
  endpoints: (builder) => ({
    getTagList: builder.query<IProjectList[], void>({
      query: () => {
        return {
          url: 'project',
          method: 'GET',
        }
      },
      transformResponse: (response: QueryDatabaseResponse, args, meta) => {
        return _validPageObject(response).map((pageObject: PageObject) =>
          _transformTag(pageObject)
        ) as IProjectList[]
      },
    }),
    getProjectByTag: builder.query<IProjectList[], { tag: string }>({
      query: ({ tag }) => {
        return {
          url: 'project',
          method: 'GET',
          params: { tag },
        }
      },
      transformResponse: (response: QueryDatabaseResponse, args, meta) => {
        return _validPageObject(response).map((pageObject: PageObject) =>
          _transformData(pageObject)
        ) as IProjectList[]
      },
    }),
  }),
})

function _transformTag(pageObject: responses.PageObject) {
  const prop = pageObject.properties
  return (prop.Tag.rich_text as any)[0].plain_text
}

function _transformData(pageObject: responses.PageObject) {
  const prop = pageObject.properties
  return {
    id: pageObject.id,
    project_name: (prop.ProjectName.rich_text as any)[0].plain_text,
    tag: (prop.Tag.rich_text as any)[0].plain_text,
    desc: (prop.Description.rich_text as any)[0].plain_text,
    thumbnail: prop.Thumbnail.url,
    alt_thumbnail: (prop.AltThumbnail.rich_text as any)[0].plain_text,
    preview: prop.Preview?.url || null,
  }
}

// export hooks for useage in functional components
export const { useGetTagListQuery, useGetProjectByTagQuery, usePrefetch } = projectAPI

// export endpoints for use in SSR
export const { getTagList, getProjectByTag } = projectAPI.endpoints
