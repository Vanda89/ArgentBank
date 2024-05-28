import { login as apiLogin } from '../services/apiService'

export const LOGIN_START = 'LOGIN_START'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAILURE = 'LOGIN_FAILURE'
export const LOGOUT = 'LOGOUT'

export const loginStart = () => {
  return {
    type: LOGIN_START,
  }
}

export const loginSuccess = (token) => {
  return {
    type: LOGIN_SUCCESS,
    payload: token,
  }
}

export const loginFailure = (error) => {
  return {
    type: LOGIN_FAILURE,
    payload: error,
  }
}

export const logout = () => {
  console.log('LOGOUT ACTIONS')
  return (dispatch) => {
    dispatch({ type: 'LOGOUT' })
  }
}

export const login = ({ email, password }) => {
  return async (dispatch) => {
    dispatch(loginStart())
    try {
      const token = await apiLogin({ email, password })
      dispatch(loginSuccess(token))
      return token
    } catch (error) {
      console.log(error)
      dispatch(loginFailure(error.toString()))
    }
  }
}
