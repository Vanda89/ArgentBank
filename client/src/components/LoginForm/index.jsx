import './LoginForm.css'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { login } from '../../store/slices/authSlice'
import { ROUTES } from '../../config'
import { selectToken, selectError } from '../../store/slices/selectors'

/**
 * Get the token from the auth state to redirect the user to the profile page
 * if he is already logged in
 *
 * @returns {JSX.Element}
 */
export default function LoginForm() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const token = useSelector(selectToken)
  const error = useSelector(selectError)

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errorMessage, setErrorMessage] = useState({ email: '', password: '' })
  const [rememberMe, setRememberMe] = useState(false)

  useEffect(() => {
    const savedEmail = localStorage.getItem('email')
    if (savedEmail) {
      setEmail(savedEmail)
      setRememberMe(true)
    }

    if (token) {
      navigate(ROUTES.PROFILE)
    }
  }, [token, navigate])

  const validateInputs = (email, password) => {
    const newErrors = { email: '', password: '' }
    if (!email) {
      newErrors.email = 'Please enter your email'
    } else if (!email.trim()) {
      newErrors.email = 'Please enter a valid email'
    }
    if (!password) {
      newErrors.password = 'Please enter your password'
    } else if (!password.trim()) {
      newErrors.password = 'Please enter a valid password'
    }
    setErrorMessage(newErrors)
    return newErrors
  }

  const handleInputChange = (setValue, key, value) => {
    setValue(value)
    const newErrors = validateInputs(value, password)
    const newErrorMessage = { ...errorMessage, [key]: newErrors[key] }
    setErrorMessage(newErrorMessage)
  }

  const handleLogin = async (e) => {
    e.preventDefault()
    const validationErrors = validateInputs(email, password)
    if (validationErrors.email || validationErrors.password) {
      setErrorMessage(validationErrors)
      return
    }

    await dispatch(login({ email, password }))
    if (rememberMe) {
      localStorage.setItem('email', email)
    }
  }

  return (
    <form className="login-form">
      <div className="input-wrapper">
        <label htmlFor="email">Username</label>
        <input
          type="text"
          id="email"
          value={email}
          onChange={(e) => handleInputChange(setEmail, 'email', e.target.value)}
        />
        {errorMessage ? (
          <p className="error-message">{errorMessage.email}</p>
        ) : (
          <p className="error-message"></p>
        )}
      </div>
      <div className="input-wrapper">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) =>
            handleInputChange(setPassword, 'password', e.target.value)
          }
        />
        {errorMessage ? (
          <p className="error-message">{errorMessage.password}</p>
        ) : (
          <p className="error-message"></p>
        )}
      </div>
      <div>
        {error ? (
          <p className="error-message">Invalid email or password</p>
        ) : (
          <p className="error-message"></p>
        )}
      </div>

      <div className="input-remember">
        <input
          type="checkbox"
          id="remember-me"
          checked={rememberMe}
          onChange={(e) => setRememberMe(e.target.checked)}
        />
        <label htmlFor="remember-me">Remember me</label>
      </div>

      <button type="submit" className="sign-in-button" onClick={handleLogin}>
        Sign In
      </button>
    </form>
  )
}
