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
