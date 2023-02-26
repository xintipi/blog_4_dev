import { ISendMailRequest } from '@/interface/contact.interface'
import Ngprogress from '@/lib/ngprogress'
import { api } from '@/services/api'

export const CONTACT_API_REDUCER_KEY = 'contactAPI'

export const contactAPI = api({
  reducerPath: CONTACT_API_REDUCER_KEY,
}).injectEndpoints({
  endpoints: (builder) => ({
    processSendMail: builder.mutation<any, ISendMailRequest>({
      query: (credentials) => ({
        url: '/send-mail',
        method: 'POST',
        params: credentials,
      }),
      async onQueryStarted({ name, mail, question }, { dispatch, queryFulfilled }) {
        try {
          Ngprogress.start()
          await queryFulfilled
          Ngprogress.done()
        } catch {
          Ngprogress.done()
        }
      },
    }),
  }),
})

// export hooks for useage in functional components
export const { useProcessSendMailMutation } = contactAPI

// export endpoints for use in SSR
export const { processSendMail } = contactAPI.endpoints
