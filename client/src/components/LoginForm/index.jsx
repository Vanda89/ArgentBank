import './LoginForm.css'
import { useDispatch } from 'react-redux'
import { login } from '../../actions/authActions'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { ROUTES } from '../../config'

export default function LoginForm() {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleLogin = async (e) => {
    e.preventDefault()
    setError('')

    if (!email || !password) {
      setError('Please fill in all fields')
      return
    }

    try {
      const user = await dispatch(login({ email, password }))
      if (user) {
        navigate(ROUTES.PROFILE)
      }
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
      {/*
      <NavLink to={ROUTES.PROFILE} className="sign-in-button">
        Sign In
      </NavLink>

  */}
      <button type="submit" className="sign-in-button" onClick={handleLogin}>
        Sign In
      </button>
    </form>
  )
}
