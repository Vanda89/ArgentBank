import Account from '../../components/Account/index.jsx'
import EditName from '../../components/EditName/index.jsx'
import Loader from '../../components/Loader/index.jsx'
import './Profile.css'
import { useSelector, useDispatch } from 'react-redux'
import { fetchProfile } from '../../store/slices/userSlice'
import { useEffect, useState } from 'react'
import {
  selectToken,
  selectLoading,
  selectProfile,
} from '../../store/slices/selectors'

// Array of accounts to display in the profile page
const accounts = [
  {
    title: 'Argent Bank Checking (x8349)',
    amount: '$2,082.79',
    description: 'Available Balance',
  },
  {
    title: 'Argent Bank Savings (x6712)',
    amount: '$10,928.42',
    description: 'Available Balance',
  },
  {
    title: 'Argent Bank Checking (x8349)',
    amount: '$184.30',
    description: 'Current Balance',
  },
]

/**
 * Get the token from the auth state to fetch the user profile and display it
 *
 * @returns {JSX.Element}
 */
export default function Profile() {
  const token = useSelector(selectToken)
  const loading = useSelector(selectLoading)
  const profile = useSelector(selectProfile)
  const dispatch = useDispatch()
  const [isEditButtonClicked, setIsEditButtonClicked] = useState(false)

  useEffect(() => {
    if (token) {
      dispatch(fetchProfile(token))
    }
  }, [token, dispatch])

  const handleEdit = () => {
    setIsEditButtonClicked((currentState) => !currentState)
  }

  const shouldShowLoader =
    loading || profile === null || Object.keys(profile).length === 0

  return (
    <main className="main bg-dark">
      <div className="header">
        <h1>
          Welcome back
          <br />
          {shouldShowLoader ? (
            <Loader />
          ) : (
            <>
              {!isEditButtonClicked &&
                `${profile.firstName} ${profile.lastName} !`}
              {isEditButtonClicked && (
                <EditName
                  token={token}
                  profile={profile}
                  handleEdit={handleEdit}
                />
              )}
            </>
          )}
        </h1>
        {!isEditButtonClicked && profile ? (
          <button type="button" className="edit-button" onClick={handleEdit}>
            Edit
          </button>
        ) : null}
      </div>
      <h2 className="sr-only">Accounts</h2>

      {accounts.map((account, index) => (
        <Account
          key={index}
          title={account.title}
          amount={account.amount}
          description={account.description}
        />
      ))}
    </main>
  )
}
