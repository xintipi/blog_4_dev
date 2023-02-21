import { createApi } from '@reduxjs/toolkit/query/react'
import { HYDRATE } from 'next-redux-wrapper'

import { SendmailRequest } from '@/interface/contact.interface'
import axiosBaseQuery from '@/services/index'

export const CONTACT_API_REDUCER_KEY = 'contactAPI'

export const contactAPI = createApi({
  reducerPath: CONTACT_API_REDUCER_KEY,
  baseQuery: axiosBaseQuery({ baseUrl: 'http://localhost:3000/api' }),
  extractRehydrationInfo(action, { reducerPath }) {
    if (action.type === HYDRATE) {
      return action.payload[reducerPath]
    }
  },
  endpoints: (builder) => ({
    sendMail: builder.mutation<any, SendmailRequest>({
      query: (data) => {
        return {
          url: '/send-mail',
          method: 'POST',
          body: data,
        }
      },
    }),
  }),
})

// export hooks for useage in functional components
export const { useSendMailMutation } = contactAPI

// export endpoints for use in SSR
export const { sendMail } = contactAPI.endpoints
