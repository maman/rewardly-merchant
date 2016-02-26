import * as authActions from 'flux/actions/auth'

const initialState = {
  isLoading: false,
  isFailed: false,
  message: '',
  user: {
    member_id: '',
    username: '',
    msisdn: '',
    type: ''
  }
}

export default function auth (state = initialState, action) {
  switch (action.type) {

    /**
     * Handle AUTH_REQUEST
     * @type {String}
     */
    case authActions.AUTH_REQUEST:
      return Object.assign({}, state, {
        isLoading: true
      })

    /**
     * Handle AUTH_SUCCESS
     * @type {String}
     */
    case authActions.AUTH_SUCCESS:
      console.log(action)
      return Object.assign({}, state, {
        isLoading: false,
        isFailed: false,
        user: action.data
      })

    /**
     * Handle AUTH_FAILURE
     * @type {String}
     */
    case authActions.AUTH_FAILURE:
      return Object.assign({}, state, {
        isLoading: false,
        isFailed: true,
        message: action.error.text
      })

    /**
     * Handle AUTH_LOGOUT
     * @type {String}
     */
    case authActions.AUTH_LOGOUT:
      return Object.assign({}, state, initialState)

    default:
      return state
  }
}
