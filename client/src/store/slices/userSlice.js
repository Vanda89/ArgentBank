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
 * Fetch the user profile
 * @param {string} token - The user token
 * @returns {Promise} The promise object representing the user profile
 */
export const fetchProfile = createAsyncThunk(
  'user/getProfile',
  async (token, { rejectWithValue }) => {
    try {
      const response = await apiGetProfile(token)
      return { profile: response.body }
    } catch (err) {
      return rejectWithValue(err.response.data)
    }
  },
)

/**
 * Update the user profile
 * @param {string} token - The user token
 * @param {object} profile - The user profile
 * @returns {Promise} The promise object representing the updated user profile
 */
export const updateProfile = createAsyncThunk(
  'user/updateProfile',
  async ({ token, profile }, { rejectWithValue }) => {
    try {
      const response = await apiUpdateProfile(token, profile)
      return { profile: response.body }
    } catch (err) {
      console.log(err.response.data, 'err.response.data')
      return rejectWithValue(err.response.data)
    }
  },
)

/**
 * The user slice
 * @type {Slice}
 * @name userSlice
 * @returns {Object} The user slice
 * @property {Object} initialState - The initial state
 * @property {Function} extraReducers - The extra reducers
 * @property {Function} fetchProfile - The fetch profile function
 * @property {Function} updateProfile - The update profile function
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
