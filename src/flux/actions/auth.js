import authApi from 'datasources/auth'

export const AUTH_REQUEST = 'AUTH_REQUEST'
export const AUTH_SUCCESS = 'AUTH_SUCCESS'
export const AUTH_FAILURE = 'AUTH_FAILURE'
export const AUTH_LOGOUT = 'AUTH_LOGOUT'

export function auth (loginData) {
  if (DEBUG) console.debug(`[i]::performing auth with data { username: ${loginData.username}, password: ${loginData.password} }`)
  return (dispatch) => {
    dispatch(authLoading())
    authApi(loginData)
      .then(({ data }) => {
        dispatch(authLoaded(data))
      })
      .catch((error) => {
        dispatch(authFailed(error))
      })
  }
}

export function authLoading () {
  if (DEBUG) console.debug('[i]::loading auth...')
  return {
    type: AUTH_REQUEST
  }
}

export function authLoaded (data) {
  if (DEBUG) console.debug('[i]::auth success')
  return {
    type: AUTH_SUCCESS,
    data
  }
}

export function authFailed (error) {
  if (DEBUG) console.warn('[e]::auth error')
  return {
    type: AUTH_FAILURE,
    error
  }
}

export function authLogout () {
  return {
    type: AUTH_LOGOUT
  }
}
