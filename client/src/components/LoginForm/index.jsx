import './LoginForm.css'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { login } from '../../store/slices/authSlice'
import { ROUTES } from '../../config'
import { selectToken } from '../../store/slices/selectors'

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
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
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
    if (!email.trim()) {
      newErrors.email = 'Please enter your email'
    }
    if (!password.trim()) {
      newErrors.password = 'Please enter your password'
    }
    setError(newErrors)
    return newErrors
  }

  const handleLogin = async (e) => {
    e.preventDefault()
    const validationErrors = validateInputs(email, password)
    if (validationErrors.email || validationErrors.password) {
      return
    }

    try {
      await dispatch(login({ email, password }))
      if (rememberMe) {
        localStorage.setItem('email', email)
      }
    } catch (error) {
      console.error(error)
      setError('Failed to log in')
    }
  }

  return (
    <form>
      <div className="input-wrapper">
        <label htmlFor="email">Username</label>
        <input
          type="text"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {error.email && <p className="error-message">{error.email}</p>}
      </div>
      <div className="input-wrapper">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {error.password && <p className="error-message">{error.password}</p>}
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
