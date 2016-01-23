const baseUrl = 'http://api.rewardly.com'

const endpoint = {
  auth: `${ baseUrl }/auth`,
  register: `${ baseUrl }/register`,
  profile: `${ baseUrl }/merchant`,
  gift: `${ baseUrl }/merchant/gift`,
  discount: `${ baseUrl }/merchant/discount`,
  transaction: `${ baseUrl }/merchant/transaction`,
  search: `${ baseUrl }/merchant/search`
}

const pubnub = {
  publish_key: '',
  subscribe_key: ''
}

export { endpoint, pubnub }
