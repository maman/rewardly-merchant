import merchantApi from 'datasources/merchant'

export const MERCHANT_CREATE_REQUEST = 'MERCHANT_CREATE_REQUEST'
export const MERCHANT_CREATE_SUCCESS = 'MERCHANT_CREATE_SUCCESS'
export const MERCHANT_CREATE_FAILURE = 'MERCHANT_CREATE_FAILURE'

export const MERCHANT_UPDATE_REQUEST = 'MERCHANT_UPDATE_REQUEST'
export const MERCHANT_UPDATE_SUCCESS = 'MERCHANT_UPDATE_SUCCESS'
export const MERCHANT_UPDATE_FAILURE = 'MERCHANT_UPDATE_FAILURE'

export const MERCHANT_GET_REQUEST = 'MERCHANT_GET_REQUEST'
export const MERCHANT_GET_SUCCESS = 'MERCHANT_GET_SUCCESS'
export const MERCHANT_GET_FAILURE = 'MERCHANT_GET_FAILURE'

export const MERCHANT_TRANSACTIONS_REQUEST = 'MERCHANT_TRANSACTIONS_REQUEST'
export const MERCHANT_TRANSACTIONS_SUCCESS = 'MERCHANT_TRANSACTIONS_SUCCESS'
export const MERCHANT_TRANSACTIONS_FAILURE = 'MERCHANT_TRANSACTIONS_FAILURE'

export const MERCHANT_MEMBERS_REQUEST = 'MERCHANT_MEMBERS_REQUEST'
export const MERCHANT_MEMBERS_SUCCESS = 'MERCHANT_MEMBERS_SUCCESS'
export const MERCHANT_MEMBERS_FAILURE = 'MERCHANT_MEMBERS_FAILURE'

/**
 * Create new merchant / register new merchant
 * @param  {Object} merchant Merchant object
 */
export function create (merchant) {
  return (dispatch) => {
    dispatch(createLoading())
    merchantApi.create(merchant)
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
    type: MERCHANT_CREATE_REQUEST
  }
}

export function createLoaded (merchant) {
  return {
    type: MERCHANT_CREATE_SUCCESS,
    merchant
  }
}

export function createFailed (error) {
  return {
    type: MERCHANT_CREATE_FAILURE,
    error
  }
}

/** ---------------------------------------- */

/**
 * Update merchant
 * @param  {Number} id       Merchant ID
 * @param  {Object} merchant Merchant object
 */
export function update (id, merchant) {
  return (dispatch) => {
    dispatch(updateLoading())
    merchantApi.update(id, merchant)
      .then(() => {
        dispatch(updateLoaded())
      })
      .catch((error) => {
        dispatch(updateFailed(error))
      })
  }
}

export function updateLoading () {
  return {
    type: MERCHANT_UPDATE_REQUEST
  }
}

export function updateLoaded () {
  return {
    type: MERCHANT_UPDATE_SUCCESS
  }
}

export function updateFailed (error) {
  return {
    type: MERCHANT_UPDATE_FAILURE,
    error
  }
}

/** ---------------------------------------- */

/**
 * Get merchant detail
 * @param  {Number} id Merchant ID
 */
export function get (id) {
  return (dispatch) => {
    dispatch(getLoading())
    merchantApi.get(id)
      .then(({ data }) => {
        dispatch(getLoaded(data.data))
      })
      .catch((error) => {
        dispatch(getFailed(error))
      })
  }
}

export function getLoading () {
  return {
    type: MERCHANT_GET_REQUEST
  }
}

export function getLoaded (merchant) {
  return {
    type: MERCHANT_GET_SUCCESS,
    merchant
  }
}

export function getFailed (error) {
  return {
    type: MERCHANT_GET_FAILURE,
    error
  }
}

/** ---------------------------------------- */

/**
 * Get merchant transaction
 * @param  {Number} id Merchant ID
 */
export function transactions (id) {
  return (dispatch) => {
    dispatch(transactionsLoading())
    merchantApi.getTransactions(id)
      .then(({ data }) => {
        dispatch(transactionsLoaded(data.data))
        // dispatch(transactionsLoaded(transactionLists.transactions)) /** TODO: mocks */
      })
      .catch((error) => {
        dispatch(transactionsFailed(error))
      })
  }
}

export function transactionsLoading () {
  return {
    type: MERCHANT_TRANSACTIONS_REQUEST
  }
}

export function transactionsLoaded (transactions) {
  return {
    type: MERCHANT_TRANSACTIONS_SUCCESS,
    transactions
  }
}

export function transactionsFailed (error) {
  return {
    type: MERCHANT_TRANSACTIONS_FAILURE,
    error
  }
}

/** ---------------------------------------- */

/**
 * Get merchant members
 * @param  {Number} id Merchant ID
 */
export function members (id) {
  return (dispatch) => {
    dispatch(membersLoading())
    merchantApi.getMembers(id)
      .then(({ data }) => {
        dispatch(membersLoaded(data.data))
        // dispatch(membersLoaded(memberLists.members)) /** TODO: mocks */
      })
      .catch((error) => {
        dispatch(membersFailed(error))
      })
  }
}

export function membersLoading () {
  return {
    type: MERCHANT_MEMBERS_REQUEST
  }
}

export function membersLoaded (members) {
  return {
    type: MERCHANT_MEMBERS_SUCCESS,
    members
  }
}

export function membersFailed (error) {
  return {
    type: MERCHANT_MEMBERS_FAILURE,
    error
  }
}

/** ---------------------------------------- */
