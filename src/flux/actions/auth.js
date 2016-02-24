import authApi from '../../datasources/auth'

export const AUTH_REQUEST = 'AUTH_REQUEST'
export const AUTH_SUCCESS = 'AUTH_SUCCESS'
export const AUTH_FAILURE = 'AUTH_FAILURE'

export function auth (loginData) {
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
  return {
    type: AUTH_REQUEST
  }
}

export function authLoaded (data) {
  return {
    type: AUTH_SUCCESS,
    data
  }
}

export function authFailed (error) {
  return {
    type: AUTH_FAILURE,
    error
  }
}
