import { combineReducers } from '@reduxjs/toolkit'

import { languageAPI, LANGUAGES_API_REDUCER_KEY } from '@/services/languageAPI'

import { authStore } from './modules/auth.store'
import { commonStore } from './modules/common.store'

const rootReducer = combineReducers({
  common: commonStore.reducer,
  auth: authStore.reducer,
  [LANGUAGES_API_REDUCER_KEY]: languageAPI.reducer,
})

export default rootReducer
