import http from 'axios'
import { endpoint } from '../config'

let constructGiftURL = (merchantId, plural) => {
  return `${endpoint.merchant}/${merchantId}/gift${plural ? 's' : ''}`
}

export default {
  /**
   * Get all gifts avalaible on merchant
   * @param  {Number} merchantId Merchant ID
   * @return {Promise}
   */
  getAll: (merchantId) => {
    return http({
      method: 'GET',
      url: constructGiftURL(merchantId, true)
    })
  },

  /**
   * Add new gift on merchant
   * @param  {Number} merchantId Merchant ID to add gift to
   * @param  {Object} gift       Gift object
   * @return {Promise}
   */
  create: (merchantId, gift) => {
    return http({
      method: 'POST',
      url: constructGiftURL(merchantId, true)
    }, gift)
  },

  /**
   * Edit gift on merchant
   * @param  {Number} merchantId Merchant ID to edit gift to
   * @param  {Number} id         Gift ID to edit
   * @param  {Object} gift       Gift object
   * @return {Promise}
   */
  update: (merchantId, id, gift) => {
    return http({
      method: 'POST',
      url: `${constructGiftURL(merchantId)}/${id}`
    }, gift)
  },

  /**
   * Delete gift on merchant
   * @param  {Number} merchantId Merchant ID to delete gift to
   * @param  {Number} id         Gift ID to delete
   * @return {Promise}
   */
  delete: (merchantId, id) => {
    return http({
      method: 'DELETE',
      url: `${constructGiftURL(merchantId)}/${id}`
    })
  },

  /**
   * Get gift detail on merchant
   * @param  {Number} merchantId Merchant ID that related to gift
   * @param  {Number} id         Gift ID to view
   * @return {Promise}
   */
  get: (merchantId, id) => {
    return http({
      method: 'GET',
      url: `${constructGiftURL(merchantId)}/${id}`
    })
  }
}
