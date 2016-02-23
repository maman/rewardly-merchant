import http from 'axios'
import { endpoint } from '../config'

/**
 * Authenticate to API
 * @param  {Object} loginData Login object
 * @return {Promise}
 */
export default function (loginData) {
  return http({
    method: 'POST',
    url: `${endpoint.auth}/login`
  }, loginData)
}
