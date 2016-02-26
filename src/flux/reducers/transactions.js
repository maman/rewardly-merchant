import * as merchantActions from 'flux/actions/merchant'

const initialState = {
  isLoading: false,
  isFailed: false,
  message: '',
  transactions: []
}

export default function members (state = initialState, action) {
  switch (action.type) {
    case merchantActions.MERCHANT_TRANSACTIONS_REQUEST:
      return Object.assign({}, state, {
        isLoading: true
      })

    case merchantActions.MERCHANT_TRANSACTIONS_SUCCESS:
      return Object.assign({}, state, {
        isLoading: false,
        isFailed: false,
        message: '',
        transactions: action.transactions
      })

    case merchantActions.MERCHANT_TRANSACTIONS_FAILURE:
      return Object.assign({}, state, {
        isLoading: false,
        isFailed: true,
        message: action.error.text
      })

    default:
      return state
  }
}
