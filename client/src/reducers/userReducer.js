import {
  GET_PROFILE_START,
  GET_PROFILE_SUCCESS,
  GET_PROFILE_FAILURE,
} from '../actions/userActions'

export const initialState = {
  loading: false,
  error: null,
  profile: {},
}

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PROFILE_START:
      return {
        ...state,
        loading: true,
      }
    case GET_PROFILE_SUCCESS:
      return {
        ...state,
        profile: action.payload,
        loading: false,
        error: null,
      }
    case GET_PROFILE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      }
    default:
      return state
  }
}
