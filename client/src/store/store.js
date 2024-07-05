import { combineReducers } from 'redux'
import { configureStore } from '@reduxjs/toolkit'
import authReducer from './slices/authSlice'
import userReducer from './slices/userSlice'

const rootReducer = combineReducers({
  auth: authReducer,
  user: userReducer,
})

// Configure the store with the combined reducer and getDefaultMiddleware to add the Redux Toolkit middlewares
const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
})

export default store
