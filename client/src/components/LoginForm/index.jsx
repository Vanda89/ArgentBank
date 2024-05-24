import './LoginForm.css'
import { NavLink } from 'react-router-dom'
import { ROUTES } from '../../config'

export default function LoginForm() {
  return (
    <form>
      <div className="input-wrapper">
        <label htmlFor="username">Username</label>
        <input type="text" id="username" />
      </div>
      <div className="input-wrapper">
        <label htmlFor="password">Password</label>
        <input type="password" id="password" />
      </div>
      <div className="input-remember">
        <input type="checkbox" id="remember-me" />
        <label htmlFor="remember-me">Remember me</label>
      </div>
      {/*


  <button type="submit" className="sign-in-button">
        Sign In
      </button>


  */}

      <NavLink to={ROUTES.PROFILE} className="sign-in-button">
        Sign In
      </NavLink>
    </form>
  )
}
