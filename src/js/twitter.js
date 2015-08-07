import tw from 'twitter'
import {EventEmitter} from 'events'

function makeConnection (options) {
  {key, secret, acc_key, acc_secret, api, track} = options

  const client = new Twitter({
    consumer_key: key,
    consumer_secret: secret,
    access_token_key: acc_key,
    access_token_secret: acc_secret,
  })

  const emitter = new EventEmitter()

  client.stream(api, {track: track}, function(stream) {
    stream.on('data', tweet => emitter.emit('message', data))
    stream.on('error', error => emitter.emit('error', error))
  })

  return emitter
}

export default makeConnection
