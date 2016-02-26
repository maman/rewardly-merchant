import * as merchantActions from 'flux/actions/merchant'

const initialState = {
  isLoading: false,
  isFailed: false,
  message: '',
  merchant: {}
}

export default function merchant (state = initialState, action) {
  switch (action.type) {
    case merchantActions.MERCHANT_CREATE_REQUEST:
    case merchantActions.MERCHANT_UPDATE_REQUEST:
    case merchantActions.MERCHANT_GET_REQUEST:
      return Object.assign({}, state, {
        isLoading: true
      })

    case merchantActions.MERCHANT_GET_SUCCESS:
      return Object.assign({}, state, {
        isLoading: false,
        isFailed: false,
        message: '',
        merchant: action.merchant
      })

    case merchantActions.MERCHANT_CREATE_SUCCESS:
    case merchantActions.MERCHANT_UPDATE_SUCCESS:
      return Object.assign({}, state, {
        isLoading: false,
        isFailed: false,
        message: ''
      })

    case merchantActions.MERCHANT_CREATE_FAILURE:
    case merchantActions.MERCHANT_UPDATE_FAILURE:
    case merchantActions.MERCHANT_GET_FAILURE:
      return Object.assign({}, state, {
        isLoading: false,
        isFailed: true,
        message: action.error.text
      })

    default:
      return state
  }
}
