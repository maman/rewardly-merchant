// const baseUrl = 'http://api.rewardly.com'
// const baseUrl = 'http://private-c8d27-rewardly.apiary-mock.com'
// const baseUrl = 'http://172.17.34.49:8000'
const baseUrl = 'http://rewardly.mybluemix.net'

let endpoint = Object.freeze({
  auth: `${baseUrl}/auth`,
  check: `${baseUrl}/auth/ecash`,
  merchant: `${baseUrl}/merchants`,
  member: `${baseUrl}/member`,
  transaction: `${baseUrl}/transaction`
})

let pubnub = Object.freeze({
  publish_key: '',
  subscribe_key: ''
})

let mapsApiKey = 'AIzaSyCSMqOSH6TApiFQ3VU2NvtGl4TfGt4Tm-U'

export { endpoint, pubnub, mapsApiKey }
