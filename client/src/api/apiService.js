/**
 * Log in a user
 * @async
 * @param {Object} credentials - The user's credentials
 * @param {string} credentials.username - The user's username
 * @param {string} credentials.password - The user's password
 * @returns {Promise<Object>} The response data
 * @throws {Error} If the response is not ok
 */
export const login = async (credentials) => {
  try {
    const apiBaseUrl = process.env.VITE_API_BASE_URL
    const response = await fetch(`${apiBaseUrl}/api/v1/user/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credentials),
    })

    if (!response.ok) {
      const responseBody = await response.json()
      console.error(responseBody)

      throw new Error(responseBody.message)
    }

    return await response.json()
  } catch (error) {
    console.error(error)
    throw error
  }
}

/**
 * Sign up a new user
 * @async
 * @param {Object} user - The new user's data
 * @param {string} user.username - The new user's username
 * @param {string} user.password - The new user's password
 * @returns {Promise<Object>} The response data
 * @throws {Error} If the response is not ok
 */
export const signup = async (user) => {
  try {
    const apiBaseUrl = import.meta.env.VITE_API_BASE_URL
    const response = await fetch(`${apiBaseUrl}/api/v1/user/signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    })

    if (!response.ok) {
      const responseBody = await response.json()
      console.error(responseBody)
      throw new Error(responseBody.message)
    }

    return await response.json()
  } catch (error) {
    throw new Error('An error occurred while trying to sign up')
  }
}

/**
 * Get a user's profile
 * @async
 * @param {string} token - The user's authentication token
 * @returns {Promise<Object>} The user's profile data
 * @throws {Error} If the response is not ok
 */
export const getProfile = async (token) => {
  try {
    const apiBaseUrl = import.meta.env.VITE_API_BASE_URL
    const response = await fetch(`${apiBaseUrl}/api/v1/user/profile`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    })

    if (!response.ok) {
      const responseBody = await response.json()
      console.error(responseBody)
      throw new Error(responseBody.message)
    }

    return await response.json()
  } catch (error) {
    throw new Error('An error occurred while trying to get the profile')
  }
}

/**
 * Update a user's profile
 * @async
 * @param {string} token - The user's authentication token
 * @param {Object} profile - The new profile data
 * @returns {Promise<Object>} The response data
 * @throws {Error} If the response is not ok
 */
export const updateProfile = async (token, profile) => {
  try {
    const apiBaseUrl = import.meta.env.VITE_API_BASE_URL
    const response = await fetch(`${apiBaseUrl}/api/v1/user/profile`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(profile),
    })

    if (!response.ok) {
      const responseBody = await response.json()
      console.error(responseBody)
      throw new Error(responseBody.message)
    }

    return await response.json()
  } catch (error) {
    throw new Error('An error occurred while trying to update the profile')
  }
}
