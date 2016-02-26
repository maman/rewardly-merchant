import http from 'axios'
import { endpoint } from 'config'

export default {
  /**
   * Get member by ID
   * @param  {Number} id Member ID
   * @return {Promise}
   */
  get: (id) => {
    return http({
      method: 'GET',
      url: `${endpoint.member}/${id}`
    })
  }
}
