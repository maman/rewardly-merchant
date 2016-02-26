// const baseUrl = 'http://api.rewardly.com'
const baseUrl = 'http://private-c8d27-rewardly.apiary-mock.com'

let endpoint = Object.freeze({
  auth: `${baseUrl}/auth`,
  merchant: `${baseUrl}/merchant`,
  transaction: `${baseUrl}/transaction`
})

let pubnub = Object.freeze({
  publish_key: '',
  subscribe_key: ''
})

let mapsApiKey = 'AIzaSyCSMqOSH6TApiFQ3VU2NvtGl4TfGt4Tm-U'

export { endpoint, pubnub, mapsApiKey }
