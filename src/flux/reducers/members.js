import * as merchantActions from 'flux/actions/merchant'

const initialState = {
  isLoading: false,
  isFailed: false,
  message: '',
  members: []
}

export default function members (state = initialState, action) {
  switch (action.type) {
    case merchantActions.MERCHANT_MEMBERS_REQUEST:
      return Object.assign({}, state, {
        isLoading: true
      })

    case merchantActions.MERCHANT_MEMBERS_SUCCESS:
      return Object.assign({}, state, {
        isLoading: false,
        isFailed: false,
        message: '',
        members: action.members
      })

    case merchantActions.MERCHANT_MEMBERS_FAILURE:
      return Object.assign({}, state, {
        isLoading: false,
        isFailed: true,
        message: action.error.text
      })

    default:
      return state
  }
}
