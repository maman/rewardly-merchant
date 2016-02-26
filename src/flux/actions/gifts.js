import giftApi from 'datasources/gift'

export const GIFT_LIST_REQUEST = 'GIFT_LIST_REQUEST'
export const GIFT_LIST_SUCCESS = 'GIFT_LIST_SUCCESS'
export const GIFT_LIST_FAILURE = 'GIFT_LIST_FAILURE'

export const GIFT_CREATE_REQUEST = 'GIFT_CREATE_REQUEST'
export const GIFT_CREATE_SUCCESS = 'GIFT_CREATE_SUCCESS'
export const GIFT_CREATE_FAILURE = 'GIFT_CREATE_FAILURE'

export const GIFT_UPDATE_REQUEST = 'GIFT_UPDATE_REQUEST'
export const GIFT_UPDATE_SUCCESS = 'GIFT_UPDATE_SUCCESS'
export const GIFT_UPDATE_FAILURE = 'GIFT_UPDATE_FAILURE'

export const GIFT_DELETE_REQUEST = 'GIFT_DELETE_REQUEST'
export const GIFT_DELETE_SUCCESS = 'GIFT_DELETE_SUCCESS'
export const GIFT_DELETE_FAILURE = 'GIFT_DELETE_FAILURE'

export const GIFT_GET_REQUEST = 'GIFT_GET_REQUEST'
export const GIFT_GET_SUCCESS = 'GIFT_GET_SUCCESS'
export const GIFT_GET_FAILURE = 'GIFT_GET_FAILURE'

/**
 * List all gift
 * @param  {Number} merchantId Merchant ID
 */
export function list (merchantId) {
  return (dispatch) => {
    dispatch(listLoading())
    giftApi.getAll(merchantId)
      .then(({ data }) => {
        dispatch(listLoaded(data))
      })
      .catch((error) => {
        dispatch(listFailed(error))
      })
  }
}

export function listLoading () {
  return {
    type: GIFT_LIST_REQUEST
  }
}

export function listLoaded (data) {
  return {
    type: GIFT_LIST_SUCCESS,
    data
  }
}

export function listFailed (error) {
  return {
    type: GIFT_LIST_FAILURE,
    error
  }
}

/** ---------------------------------------- */

/**
 * Create new gift on merchant
 * @param  {Number} merchantId Merchant ID
 * @param  {Object} gift       Gift object
 */
export function create (merchantId, gift) {
  return (dispatch) => {
    dispatch(createLoading())
    giftApi.create(merchantId, gift)
      .then(({ data }) => {
        dispatch(createLoaded(data))
      })
      .catch((error) => {
        dispatch(createFailed(error))
      })
  }
}

export function createLoading () {
  return {
    type: GIFT_CREATE_REQUEST
  }
}

export function createLoaded (gift) {
  return {
    type: GIFT_CREATE_SUCCESS,
    gift
  }
}

export function createFailed (error) {
  return {
    type: GIFT_CREATE_FAILURE,
    error
  }
}

/** ---------------------------------------- */

/**
 * Update gift on merchant
 * @param  {Number} merchantId Merchant ID
 * @param  {Number} giftId     Gift ID to edit
 * @param  {Object} gift       Gift object
 */
export function update (merchantId, giftId, gift) {
  return (dispatch) => {
    dispatch(updateLoading())
    giftApi.update(merchantId, giftId, gift)
      .then(({ data }) => {
        dispatch(updateLoaded(data))
      })
      .catch((error) => {
        dispatch(updateFailed(error))
      })
  }
}

export function updateLoading () {
  return {
    type: GIFT_UPDATE_REQUEST
  }
}

export function updateLoaded (gift) {
  return {
    type: GIFT_UPDATE_SUCCESS,
    gift
  }
}

export function updateFailed (error) {
  return {
    type: GIFT_UPDATE_FAILURE,
    error
  }
}

/** ---------------------------------------- */

/**
 * Delete gift on merchant
 * @param  {Number} merchantId Merchant ID
 * @param  {Number} giftId     Gift ID to delete
 */
export function del (merchantId, giftId) {
  return (dispatch) => {
    dispatch(deleteLoading())
    giftApi.delete(merchantId, giftId)
      .then(() => {
        dispatch(deleteLoaded(giftId))
      })
      .catch((error) => {
        dispatch(deleteFailed(error))
      })
  }
}

export function deleteLoading () {
  return {
    type: GIFT_DELETE_REQUEST
  }
}

export function deleteLoaded (id) {
  return {
    type: GIFT_DELETE_SUCCESS,
    id
  }
}

export function deleteFailed (error) {
  return {
    type: GIFT_DELETE_FAILURE,
    error
  }
}

/** ---------------------------------------- */

/**
 * Get gift detail on merchant
 * @param  {Number} merchantId Merchant ID
 * @param  {Number} giftId     Gift ID to lookup
 */
export function get (merchantId, giftId) {
  return (dispatch) => {
    dispatch(getLoading())
    giftApi.get(merchantId, giftId)
      .then(({ data }) => {
        dispatch(getLoaded(data))
      })
      .catch((error) => {
        dispatch(getFailed(error))
      })
  }
}

export function getLoading () {
  return {
    type: GIFT_GET_REQUEST
  }
}

export function getLoaded (gift) {
  return {
    type: GIFT_GET_SUCCESS,
    gift
  }
}

export function getFailed (error) {
  return {
    type: GIFT_GET_FAILURE,
    error
  }
}

/** ---------------------------------------- */
