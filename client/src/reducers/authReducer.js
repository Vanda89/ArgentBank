import {
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT,
} from '../actions/authActions'

export const initialState = {
  loading: false,
  error: null,
  token: '',
}

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_START:
      return {
        ...state,
        loading: true,
      }
    case LOGIN_SUCCESS:
      return {
        ...state,
        token: action.payload,
        loading: false,
        error: null,
      }
    case LOGIN_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      }
    case LOGOUT:
      return initialState
    default:
      return state
  }
}
