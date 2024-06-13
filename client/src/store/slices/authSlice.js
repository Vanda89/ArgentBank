import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { login as apiLogin } from '../../api/apiService'

const initialState = {
  loading: false,
  error: null,
  token: localStorage.getItem('token') || '',
}

/**
 * Log in the user
 * @param {object} credentials - The user credentials (email and password)
 * @returns {Promise} The promise object representing the user token
 */
export const login = createAsyncThunk(
  'auth/login',
  async ({ email, password }) => {
    const response = await apiLogin({ email, password })
    if (response.body.token) {
      localStorage.setItem('token', response.body.token)
    }
    return { token: response.body.token, error: response.error }
  },
)

/**
 * The auth slice
 * @type {Slice}
 * @name authSlice
 * @returns {Object} The auth slice
 * @property {Object} initialState - The initial state
 * @property {Function} extraReducers - The extra reducers
 * @property {Function} setToken - The set token function
 * @property {Function} logout - The logout function
 * @property {Function} login - The login function
 */
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload
      localStorage.setItem('token', action.payload)
    },
    logout: (state) => {
      state.token = ''
      localStorage.removeItem('token')
    },
  },
  extraReducers: (builder) => {
    builder.addCase(login.pending, (state) => {
      state.loading = true
    })
    builder.addCase(login.fulfilled, (state, action) => {
      state.token = action.payload.token
      state.loading = false
      state.error = action.payload.error
    })
    builder.addCase(login.rejected, (state, action) => {
      state.loading = false
      state.error = action.error.message
    })
  },
})

export const { setToken, logout } = authSlice.actions

export default authSlice.reducer
