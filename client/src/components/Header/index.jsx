import { NavLink } from 'react-router-dom'
import { ROUTES } from '../../config'
import ArgentBankLogo from '../../assets/img/logo/argentBankLogo.png'
import './Header.css'

export default function Header() {
  return (
    <nav className="main-nav">
      <NavLink className="main-nav-logo" to={ROUTES.HOME}>
        <img
          className="main-nav-logo-image"
          src={ArgentBankLogo}
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </NavLink>
      <div>
        <NavLink className="main-nav-item" to={ROUTES.LOGIN}>
          <i className="fa fa-user-circle"></i>
        </NavLink>

        <NavLink className="main-nav-item" to={ROUTES.HOME}>
          <i className="fa fa-sign-out"></i>
        </NavLink>
      </div>
    </nav>
  )
}
