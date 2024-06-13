import { combineReducers } from 'redux'
import { configureStore } from '@reduxjs/toolkit'
import logger from 'redux-logger'
import authReducer from './slices/authSlice'
import userReducer from './slices/userSlice'

const rootReducer = combineReducers({
  auth: authReducer,
  user: userReducer,
})

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
})

export default store
