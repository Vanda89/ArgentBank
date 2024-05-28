import { getProfile } from '../services/apiService'

export const GET_PROFILE_START = 'GET_PROFILE_START'
export const GET_PROFILE_SUCCESS = 'GET_PROFILE_SUCCESS'
export const GET_PROFILE_FAILURE = 'GET_PROFILE_FAILURE'

export const getProfileStart = () => {
  return {
    type: GET_PROFILE_START,
  }
}

export const getProfileSuccess = (profile) => {
  return {
    type: GET_PROFILE_SUCCESS,
    payload: profile,
  }
}

export const getProfileFailure = (error) => {
  return {
    type: GET_PROFILE_FAILURE,
    payload: error,
  }
}

export const fetchProfile = (token) => {
  return async (dispatch) => {
    dispatch(getProfileStart())
    try {
      const profile = await getProfile(token)
      console.log(profile)
      dispatch(getProfileSuccess(profile))
      return profile
    } catch (error) {
      console.log(error)

      dispatch(getProfileFailure(error.toString()))
    }
  }
}
