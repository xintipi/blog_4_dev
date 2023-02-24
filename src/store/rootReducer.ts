import { combineReducers } from '@reduxjs/toolkit'

import { ABOUT_API_REDUCER_KEY, aboutAPI } from '@/services/api/aboutAPI'
import { CONTACT_API_REDUCER_KEY, contactAPI } from '@/services/api/contactAPI'
import { PROJECT_API_REDUCER_KEY, projectAPI } from '@/services/api/projectAPI'

import { authSlice } from './slice/authSlice'
import { commonSlice } from './slice/commonSlice'

const rootReducer = combineReducers({
  common: commonSlice.reducer,
  auth: authSlice.reducer,
  [ABOUT_API_REDUCER_KEY]: aboutAPI.reducer,
  [CONTACT_API_REDUCER_KEY]: contactAPI.reducer,
  [PROJECT_API_REDUCER_KEY]: projectAPI.reducer,
})

export default rootReducer
