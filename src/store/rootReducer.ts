import { combineReducers } from '@reduxjs/toolkit'

import commonReducer from './modules/common.store'

const rootReducer = combineReducers({
  common: commonReducer,
})

export default rootReducer
