import { combineReducers } from '@reduxjs/toolkit'

import { ABOUT_API_REDUCER_KEY, aboutAPI } from '@/services/aboutAPI'
import { CONTACT_API_REDUCER_KEY, contactAPI } from '@/services/contactAPI'

import { authStore } from './modules/auth.store'
import { commonStore } from './modules/common.store'

const rootReducer = combineReducers({
  common: commonStore.reducer,
  auth: authStore.reducer,
  [ABOUT_API_REDUCER_KEY]: aboutAPI.reducer,
  [CONTACT_API_REDUCER_KEY]: contactAPI.reducer,
})

export default rootReducer
