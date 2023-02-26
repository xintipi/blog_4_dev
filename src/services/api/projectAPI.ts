import { Simulate } from 'react-dom/test-utils'

import { ILanguageSchema } from '@/interface/about.interface'
import {
  IProjectResponse,
  IProjectSchema,
  ITagResponse,
  ITagSchema,
} from '@/interface/portfolio.interface'
import { api } from '@/services/api'
import error = Simulate.error

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
      // @ts-ignore
      transformResponse: (response: ITagSchema[], args, meta) => {
        try {
          return response.map((obj) => _transformTagData(obj))
        } catch (error) {
          return error
        }
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
      // @ts-ignore
      transformResponse: (response: IProjectSchema[], args, meta) => {
        try {
          return response.map((pageObject) => _transformData(pageObject))
        } catch (error) {
          return error
        }
      },
    }),
  }),
})

function _transformTagData(pageObject: ITagSchema) {
  return {
    tag: pageObject.name,
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
