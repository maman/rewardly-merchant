/**
 * Polyfill for Array.prototype.includes
 */
if (!Array.prototype.includes) {
  Array.prototype.includes = function (searchElement) {
    'use strict'
    var O = Object(this)
    var len = parseInt(O.length, 0) || 0
    if (len === 0) {
      return false
    }
    var n = parseInt(arguments[1], 0) || 0
    var k
    if (n >= 0) {
      k = n
    } else {
      k = len + n
      if (k < 0) k = 0
    }
    var currentElement
    while (k < len) {
      currentElement = O[k]
      if (searchElement === currentElement) {
        return true
      }
      k++
    }
    return false
  }
}

/**
 * Browser persistence engine
 *
 * supports both sessionStorage and localStorage,
 * defaults to sessionStorage.
 *
 * The APIs are simply get, set, remove, and clear.
 */
let persistence = {}
const engines = ['sessionStorage', 'localStorage']
persistence.engine = 'sessionStorage'

/**
 * Set engine to use.
 * @param  {String} engineType Engine to use
 */
persistence.setEngine = (engineType) => {
  if (engines.includes(engineType)) {
    if (DEBUG) {
      console.info(`[i]::set persistence engine to ${ engineType }`)
    }
    persistence.engine = engineType
  } else {
    if (DEBUG) {
      console.error(`[i]::${ engineType } not supported`)
    }
    throw new Error(`${ engineType } not supported`)
  }
}

/**
 * Insert key-value to storage
 * @param  {String} key   Key name
 * @param  {Any}    value Value to associate with
 */
persistence.set = (key, value) => {
  if (DEBUG) {
    console.info(`[i]::using ${ persistence.engine } for storage engine`)
  }
  try {
    window[persistence.engine].setItem(key, JSON.stringify(value))
    return true
  } catch (e) {
    if (DEBUG) {
      console.error(`[e]::cannot save ${ key } to ${ persistence.engine }: ${ e }`)
    }
    return false
  }
}

/**
 * Get value associated with specified key from storage
 * @param  {String} key Key name
 */
persistence.get = (key) => {
  return JSON.parse(window[persistence.engine].getItem(key))
}

/**
 * Remove key-value pairs from storage
 * @param  {String} key Key name to remove
 */
persistence.remove = (key) => {
  return window[persistence.engine].removeItem(key)
}

/**
 * Clear storage
 */
persistence.clear = () => {
  return window[persistence.engine].clear()
}

export default persistence
