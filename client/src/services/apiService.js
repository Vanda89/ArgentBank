const BASE_URL = 'http://localhost:3001/api/v1'

export const login = async (credentials) => {
  try {
    const response = await fetch(`${BASE_URL}/user/login`, {
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

export const signup = async (user) => {
  try {
    const response = await fetch(`${BASE_URL}/user/signup`, {
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

export const getProfile = async (token) => {
  try {
    const response = await fetch(`${BASE_URL}/user/profile`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    })
    console.log(response)

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

export const updateProfile = async (token, profile) => {
  try {
    const response = await fetch(`${BASE_URL}/user/profile`, {
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
