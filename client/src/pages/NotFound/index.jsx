import './NotFound.css'
import { NavLink } from 'react-router-dom'
import { ROUTES } from '../../config'

export default function NotFound() {
  return (
    <main className="main bg-dark notFound">
      <h1>Page Not Found</h1>
      <p>The page you are looking for does not exist.</p>
      <NavLink className="home-link" to={ROUTES.HOME}>
        <button alt="Return button to the home page">Back to Home</button>
      </NavLink>
    </main>
  )
}
