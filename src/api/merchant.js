import http from 'axios'
import { endpoint } from '../config'

export default {
  /**
   * Create new merchant
   * @param  {Object} merchant Merchant object
   * @return {Promise}
   */
  create: (merchant) => {
    return http({
      method: 'POST',
      url: endpoint.merchant
    }, merchant)
  },

  /**
   * Edit merchant by ID
   * @param  {Number} id       Merchant ID to edit
   * @param  {Object} merchant Merchant Object
   * @return {Promise}
   */
  edit: (id, merchant) => {
    return http({
      method: 'POST',
      url: `${endpoint.merchant}/${id}`
    }, merchant)
  },

  /**
   * Get merchant by ID
   * @param  {Number} id Merchant ID
   * @return {Promise}
   */
  get: (id) => {
    return http({
      method: 'GET',
      url: `${endpoint.merchant}/${id}`
    })
  },

  /**
   * Get members by merchant ID
   * @param  {Number} id Merchant ID
   * @return {Promise}
   */
  getMembers: (id) => {
    return http({
      method: 'GET',
      url: `${endpoint.merchant}/${id}/members`
    })
  },

  /**
   * Get transactions by merchant ID
   * @param  {Number} id Merchant ID
   * @return {Promise}
   */
  getTransactions: (id) => {
    return http({
      method: 'GET',
      url: `${endpoint.merchant}/${id}/transactions`
    })
  }
}
