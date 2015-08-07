import Twitter from 'twitter'
import {EventEmitter} from 'events'

function makeConnection ({key, secret, acc_key, acc_secret, api, track}) {

  const emitter = new EventEmitter()



  function poll () {
    fetch('localhost:4000', {
      headers: {
        'Authorization': 'OAuth oauth_consumer_key="4a82KzzoQqmbB9GoeXohQ',
        'oauth_nonce': "f3d44e544dac859b85fc23e2f6e7e41c",
        'oauth_signature': "UibVa2MXQLwjYTy%2B0%2BKXMvFCgwE%3D",
        'oauth_signature_method': "HMAC-SHA1",
        oauth_timestamp: Date.now()
        oauth_token: "64105403-PIrbbf7ekv1uCqvgROMLJwngySSwmnom5oO66wJRn"
        oauth_version: "1.0"
      }
    }).then(res => res.json()).then(data => {
      emitter.emit('message', {response: res, tweets: tweets})
    })
    .catch(err =>
        emitter.emit('error', err))
    }

  setInterval(poll, 500)

  return emitter
}

export default makeConnection
