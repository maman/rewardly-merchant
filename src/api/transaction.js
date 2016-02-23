import http from 'axios'
import { endpoint } from '../config'

/**
 * Get transaction detail
 * @param  {Number} id Transaction ID
 * @return {Promise}
 */
export default function (id) {
  return http({
    method: 'GET',
    url: `${endpoint.transaction}/details/${id}`
  })
}
