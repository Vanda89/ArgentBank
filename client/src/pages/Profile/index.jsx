import Account from '../../components/Account/index.jsx'
import './Profile.css'
import { useSelector, useDispatch } from 'react-redux'
import { fetchProfile } from '../../actions/userActions.js'
import { useEffect } from 'react'

/**
 * Get the token from the auth state to fetch the user profile and display it
 *
 * @returns {JSX.Element}
 */
export default function Profile() {
  const token = useSelector((state) => state.auth.token)
  const loading = useSelector((state) => state.auth.loading)
  const dispatch = useDispatch()
  useEffect(() => {
    if (token) {
      dispatch(fetchProfile(token))
    }
  }, [token, dispatch])
  const user = useSelector((state) => state.user.profile)

  return (
    <main className="main bg-dark">
      <div className="header">
        <h1>
          Welcome back
          <br />
          {loading
            ? 'Loading...'
            : user && user.body
              ? user.body.firstName + ' ' + user.body.lastName + ' !'
              : 'Error loading user data'}
        </h1>
        <button className="edit-button">Edit Name</button>
      </div>
      <h2 className="sr-only">Accounts</h2>
      <Account
        title="Argent Bank Checking (x8349)"
        amount="$2,082.79"
        description="Available Balance"
      />
      <Account
        title="Argent Bank Savings (x6712)"
        amount="$10,928.42"
        description="Available Balance"
      />
      <Account
        title="Argent Bank Checking (x8349)"
        amount="$184.30"
        description="Current Balance"
      />
    </main>
  )
}
