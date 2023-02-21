import { ISendMailRequest } from '@/interface/contact.interface'
import { api } from '@/services/api'

export const CONTACT_API_REDUCER_KEY = 'contactAPI'

export const contactAPI = api({
  reducerPath: CONTACT_API_REDUCER_KEY,
  tagTypes: ['Contact'],
}).injectEndpoints({
  endpoints: (builder) => ({
    processSendMail: builder.mutation<any, ISendMailRequest>({
      query: (credentials) => ({
        url: `send-mail`,
        method: 'POST',
        params: credentials,
      }),
      invalidatesTags: ['Contact'],
    }),
  }),
})

// export hooks for useage in functional components
export const { useProcessSendMailMutation } = contactAPI

// export endpoints for use in SSR
export const { processSendMail } = contactAPI.endpoints
