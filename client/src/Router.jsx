import { Routes, Route } from 'react-router-dom'
import { ROUTES } from './config'
import Home from './pages/Home/index.jsx'
import Profile from './pages/Profile/index.jsx'
import Login from './pages/Login/index.jsx'
import NotFound from './pages/NotFound/index.jsx'

export default function Router() {
  return (
    <Routes>
      <Route path={ROUTES.PROFILE} element={<Profile />} />
      <Route path={ROUTES.LOGIN} element={<Login />} />
      <Route path={ROUTES.HOME} element={<Home />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
