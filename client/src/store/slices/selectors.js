/**
 * Selects the token from the state
 * @param {Object} state - The Redux state
 * @returns {string} The token
 */
export const selectToken = (state) => state.auth.token

/**
 * Selects the error from the state
 * @param {Object} state - The Redux state
 * @returns {string} The error
 */
export const selectError = (state) => state.auth.error

/**
 * Selects the loading status from the state
 * @param {Object} state - The Redux state
 * @returns {boolean} The loading status
 */
export const selectLoading = (state) => state.auth.loading

/**
 * Selects the profile from the state
 * @param {Object} state - The Redux state
 * @returns {Object} The profile
 */
export const selectProfile = (state) => state.user.profile
