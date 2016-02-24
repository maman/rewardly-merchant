import * as authActions from '../actions/auth'

const initialState = {
  isLoading: false,
  isFailed: false,
  message: '',
  user: {
    id: '',
    user: '',
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
      return Object.assign({}, state, {
        isLoading: false,
        isFailed: false,
        user: Object.assign({}, state.user, action.data)
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

    default:
      return state
  }
}
