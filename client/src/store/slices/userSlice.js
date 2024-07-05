import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import {
  getProfile as apiGetProfile,
  updateProfile as apiUpdateProfile,
} from '../../api/apiService'

const initialState = {
  loading: false,
  error: null,
  profile: {},
}

/**
 * Asynchronously fetches the user profile using the provided token.
 * @param {string} token - The user token
 * @param {function} rejectWithValue - A function to handle error responses from the API.
 * @returns {Promise<object>} A promise that resolves to the user profile data.
 */
export const fetchProfile = createAsyncThunk(
  'user/getProfile',
  async (token, { rejectWithValue }) => {
    try {
      const response = await apiGetProfile(token)
      return { profile: response.body }
    } catch (err) {
      console.error('An error occurred in fetchProfile:', err)
      return rejectWithValue(err.response.data)
    }
  },
)

/**
 * Asynchronously updates the user profile using the provided token and profile data.
 * @param {string} token - The user token
 * @param {object} profile - The user profile
 * @param {function} rejectWithValue - A function to handle error responses from the API.
 * @returns {Promise<object>} A promise that resolves to the updated user profile data.
 */
export const updateProfile = createAsyncThunk(
  'user/updateProfile',
  async ({ token, profile }, { rejectWithValue }) => {
    try {
      const response = await apiUpdateProfile(token, profile)
      return { profile: response.body }
    } catch (err) {
      console.error('An error occurred in updateProfile:', err)
      return rejectWithValue(err.response.data)
    }
  },
)

/**
 * The user slice
 * @type {Slice}
 * @name userSlice
 * @returns {Object} The user slice
 * @property {Object} initialState - The initial state with loading and error status
 * @property {Function} fetchProfile - Thunk action creator for fetching user profile.
 * Handles loading state and error handling.
 * @property {Function} updateProfile -  Thunk action creator for updating user profile.
 * Handles loading state, error handling, and profile update.
 */
const userSlice = createSlice({
  name: 'user',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchProfile.pending, (state) => {
      state.loading = true
    })
    builder.addCase(fetchProfile.fulfilled, (state, action) => {
      state.profile = action.payload.profile
      state.loading = false
      state.error = action.payload.error
    })
    builder.addCase(fetchProfile.rejected, (state, action) => {
      state.loading = false
      state.error = action.error.message
    })
    builder.addCase(updateProfile.pending, (state) => {
      state.loading = true
    })
    builder.addCase(updateProfile.fulfilled, (state, action) => {
      state.profile = action.payload.profile
      state.loading = false
      state.error = action.payload.error
    })
    builder.addCase(updateProfile.rejected, (state, action) => {
      state.loading = false
      state.error = action.error.message
    })
  },
})

export default userSlice.reducer
