import * as giftActions from 'flux/actions/gifts'

const initialState = {
  isLoading: false,
  isFailed: false,
  message: '',
  gifts: []
}

export default function gift (state = initialState, action) {
  switch (action.type) {

    /**
     * Handle GIFT_LIST_REQUEST
     * @type {String}
     */
    case giftActions.GIFT_LIST_REQUEST:
      return Object.assign({}, state, {
        isLoading: true
      })

    /**
     * Handle GIFT_LIST_SUCCESS
     * @type {String}
     */
    case giftActions.GIFT_LIST_SUCCESS:
      return Object.assign({}, state, {
        isLoading: false,
        isFailed: false,
        message: '',
        gifts: action.data
      })

    /**
     * Handle GIFT_CREATE_REQUEST
     * @type {String}
     */
    case giftActions.GIFT_CREATE_REQUEST:
      return Object.assign({}, state, {
        isLoading: true
      })

    /**
     * Handle GIFT_CREATE_SUCCESS
     * @type {String}
     */
    case giftActions.GIFT_CREATE_SUCCESS:
      return Object.assign({}, state, {
        isLoading: false,
        isFailed: false,
        gifts: [action.gift, ...state.gifts]
      })

    /**
     * Handle GIFT_UPDATE_REQUEST
     * @type {String}
     */
    case giftActions.GIFT_UPDATE_REQUEST:
      return Object.assign({}, state, {
        isLoading: true
      })

    /**
     * Handle GIFT_UPDATE_SUCCESS
     * @type {String}
     */
    case giftActions.GIFT_UPDATE_SUCCESS:
      return Object.assign({}, state, {
        isLoading: false,
        isFailed: false,
        gifts: state.gifts.map((gift) => {
          if (gift.id === action.gift.id) {
            return action.gift
          }
          return gift
        })
      })

    /**
     * Handle GIFT_DELETE_REQUEST
     * @type {String}
     */
    case giftActions.GIFT_DELETE_REQUEST:
      return Object.assign({}, state, {
        isLoading: true
      })

    /**
     * Handle GIFT_DELETE_SUCCESS
     * @type {String}
     */
    case giftActions.GIFT_DELETE_SUCCESS:
      return Object.assign({}, state, {
        isLoading: false,
        isFailed: false,
        gifts: state.gifts.filter((gift) => {
          return gift.id !== action.id
        })
      })

    /**
     * Handle GIFT_{LIST|CREATE|UPDATE|DELETE}_FAILURE
     * @type {String}
     */
    case giftActions.GIFT_LIST_FAILURE:
    case giftActions.GIFT_CREATE_FAILURE:
    case giftActions.GIFT_UPDATE_FAILURE:
    case giftActions.GIFT_DELETE_FAILURE:
      return Object.assign({}, state, {
        isLoading: false,
        isFailed: true,
        message: action.error.text
      })

    default:
      return state
  }
}
