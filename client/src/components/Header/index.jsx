import { NavLink, useNavigate } from 'react-router-dom'
import { ROUTES } from '../../config'
import ArgentBankLogo from '../../assets/img/logo/argentBankLogo.png'
import './Header.css'
import { useSelector, useDispatch } from 'react-redux'
import { logout } from '../../store/slices/authSlice'
import { selectToken, selectProfile } from '../../store/slices/selectors'

export default function Header() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const token = useSelector(selectToken)
  const profile = useSelector(selectProfile)

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
          {!token ? 'Sign in' : profile.firstName}
        </NavLink>
        {token ? (
          <NavLink className="main-nav-item" onClick={handleLogout}>
            <i className="fa fa-sign-out"></i>
            Sign Out
          </NavLink>
        ) : (
          ''
        )}
      </div>
    </nav>
  )
}
