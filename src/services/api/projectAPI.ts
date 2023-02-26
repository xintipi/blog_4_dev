import {
  IProjectResponse,
  IProjectSchema,
  ITagResponse,
  ITagSchema,
} from '@/interface/portfolio.interface'
import * as responses from '@/interface/responseNotion.interface'
import { PageObject, QueryDatabaseResponse } from '@/interface/responseNotion.interface'
import { _validPageObject } from '@/lib/helps'
import { api } from '@/services/api'

export const PROJECT_API_REDUCER_KEY = 'projectAPI'

export const projectAPI = api({
  reducerPath: PROJECT_API_REDUCER_KEY,
}).injectEndpoints({
  endpoints: (builder) => ({
    getTagList: builder.query<ITagResponse[], void>({
      query: () => ({
        url: '/tag',
        method: 'GET',
      }),
      transformResponse: (response: ITagSchema[], args, meta) => {
        return response.map((obj) => _transformTagData(obj))
      },
    }),
    getProjectByTag: builder.query<IProjectResponse[], { tag: string }>({
      query: ({ tag }) => {
        return {
          url: '/project',
          method: 'GET',
          params: { tag },
        }
      },
      transformResponse: (response: IProjectSchema[], args, meta) => {
        return response.map((pageObject) => _transformData(pageObject))
      },
    }),
  }),
})

function _transformTagData(pageObject: ITagSchema) {
  return {
    tag: pageObject.name as ITagResponse['tag'],
  }
}

function _transformData(pageObject: IProjectSchema) {
  return {
    id: pageObject._id,
    project_name: pageObject.projectName,
    tag_name: pageObject.tagName,
    description: pageObject.description,
    thumbnail: pageObject.thumbnail,
    alt_thumbnail: pageObject.altThumbnail,
    preview: pageObject.preview,
  }
}

// export hooks for useage in functional components
export const { useGetTagListQuery, useGetProjectByTagQuery, usePrefetch } = projectAPI

// export endpoints for use in SSR
export const { getTagList, getProjectByTag } = projectAPI.endpoints
