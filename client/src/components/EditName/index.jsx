import './EditName.css'
import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { updateProfile } from '../../store/slices/userSlice'
import PropTypes from 'prop-types'

export default function EditName({ token, profile, handleEdit }) {
  const dispatch = useDispatch()
  const [firstName, setFirstName] = useState(profile.firstName)
  const [lastName, setLastName] = useState(profile.lastName)
  const [error, setError] = useState('')

  useEffect(() => {
    if (profile) {
      setFirstName(profile.firstName)
      setLastName(profile.lastName)
    }
  }, [profile])

  // Verify that the inputs are not empty
  const validateInputs = (firstName, lastName) => {
    const errors = {}
    if (!firstName.trim()) errors.firstName = 'First Name is required'
    if (!lastName.trim()) errors.lastName = 'Last Name is required'
    return errors
  }

  // Use useCallback to avoid creating a new function on each render
  const handleSave = async (event) => {
    event.preventDefault()
    const newErrors = validateInputs(firstName, lastName)
    setError(newErrors)
    if (Object.keys(newErrors).length > 0) return

    try {
      const updatedProfile = {
        firstName,
        lastName,
      }
      await dispatch(updateProfile({ token, profile: updatedProfile }))
      handleEdit()
    } catch (error) {
      console.error(error)
      setError({ ...newErrors, save: 'Failed to save' })
    }
  }

  return (
    <form className="edit-form">
      <div className="inputs-container">
        <div className="input-wrapper">
          <input
            type="text"
            id="firstName"
            value={firstName}
            placeholder={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          {error.firstName && (
            <p className="error-message">{error.firstName}</p>
          )}
        </div>
        <div className="input-wrapper">
          <input
            type="text"
            id="lastName"
            value={lastName}
            placeholder={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          {error.lastName && <p className="error-message">{error.lastName}</p>}
        </div>
      </div>

      <div className="buttons-container">
        <button type="submit" className="save-button" onClick={handleSave}>
          Save
        </button>
        <button type="button" className="cancel-button" onClick={handleEdit}>
          Cancel
        </button>
      </div>
    </form>
  )
}

EditName.propTypes = {
  token: PropTypes.string.isRequired,
  profile: PropTypes.object.isRequired,
  handleEdit: PropTypes.func.isRequired,
}
