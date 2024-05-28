import { NavLink, useNavigate } from 'react-router-dom'
import { ROUTES } from '../../config'
import ArgentBankLogo from '../../assets/img/logo/argentBankLogo.png'
import './Header.css'
import { useDispatch } from 'react-redux'
import { logout } from '../../actions/authActions'

export default function Header() {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleLogout = async () => {
    await dispatch(logout())
    navigate(ROUTES.HOME)
  }

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

        <NavLink className="main-nav-item" onClick={handleLogout}>
          <i className="fa fa-sign-out"></i>
        </NavLink>
      </div>
    </nav>
  )
}
