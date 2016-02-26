export function capitalize (string) {
  return string[0].toUpperCase() + string.slice(1)
}

/**
 * Check if user has been authenticated
 * @param  {Object}   state     Redux state object
 * @param  {Function} callback1 callback when true
 * @param  {Function} callback2 callback when true
 */
export function checkAuth (state, callback1, callback2) {
  if (state.auth.user.msisdn && !state.auth.isError) {
    callback1()
  } else {
    callback2()
  }
}

/**
 * Locate user
 * @return {Object} Location object
 */
export function locate (cb1, cb2) {
  if (!navigator.geolocation) {
    if (DEBUG) console.warn('[w]::user doesn\'t wan\'t us to locate them. fuckit.')
    return
  }

  navigator.geolocation.getCurrentPosition(cb1, cb2)

  // navigator.geolocation.getCurrentPosition((position) => {
  //   result.lat = position.coords.latitude
  //   result.lng = position.coords.longitude
  //   if (DEBUG) console.debug(JSON.stringify(result))
  //   return result
  // }, (error) => {
  //   throw new Error(`[e]::error getting location: ${error.message}`)
  // })
}
