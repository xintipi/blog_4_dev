import { BaseQueryFn } from '@reduxjs/toolkit/query/react'
import axios, { AxiosError } from 'axios'

import { RootState } from '@/store'

const axiosBaseQuery =
  ({ baseUrl } = { baseUrl: 'http://localhost:3000/api' }): BaseQueryFn =>
  async (requestOpts, { getState }) => {
    try {
      const axiosInstance = axios.create({
        baseURL: baseUrl,
        headers: {
          Accept: 'application/json',
        },
      })
      const token = (getState() as RootState).auth.token
      const result = await axiosInstance({
        ...requestOpts,
        headers: {
          Authorization: token ? `Bearer ${token}` : undefined,
        },
      })

      return { data: result.data }
    } catch (axiosError) {
      const err = axiosError as AxiosError
      return { error: { status: err.response?.status, data: err.response?.data } }
    }
  }

export default axiosBaseQuery
