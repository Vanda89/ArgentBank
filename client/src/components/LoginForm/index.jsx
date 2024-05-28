import './LoginForm.css'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { login } from '../../actions/authActions'
import { ROUTES } from '../../config'

/**
 * Get the token from the auth state to redirect the user to the profile page
 * if he is already logged in
 *
 * @returns {JSX.Element}
 */
export default function LoginForm() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const token = useSelector((state) => state.auth.token)

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  useEffect(() => {
    if (token) {
      navigate(ROUTES.PROFILE)
    }
  }, [token, navigate])

  const handleLogin = async (e) => {
    e.preventDefault()
    setError('')

    if (!email || !password) {
      setError('Please fill in all fields')
      return
    }

    try {
      await dispatch(login({ email, password }))
    } catch (error) {
      console.error(error)
      setError('Failed to log in')
    }
  }

  return (
    <form>
      {error && <p>{error}</p>}
      <div className="input-wrapper">
        <label htmlFor="email">Username</label>
        <input
          type="text"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="input-wrapper">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className="input-remember">
        <input type="checkbox" id="remember-me" />
        <label htmlFor="remember-me">Remember me</label>
      </div>

      <button type="submit" className="sign-in-button" onClick={handleLogin}>
        Sign In
      </button>
    </form>
  )
}
