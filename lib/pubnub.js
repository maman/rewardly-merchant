import sdk from 'pubnub'
import { pubnub as config } from '../src/config.js'

if (config.publish_key === '' || config.subscribe_key === '') {
  throw new Error(`Please set PubNub publish and subscribe key on 'src/config.js'.
    For more information, please refer to: https://www.pubnub.com/docs/web-javascript/data-streams-publish-and-subscribe`)
}

export default sdk(config)
