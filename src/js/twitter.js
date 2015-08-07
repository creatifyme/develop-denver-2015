import Twitter from 'twitter'
import {EventEmitter} from 'events'
import ws from 'ws'

function makeConnection ({key, secret, acc_key, acc_secret, api, track}) {

  const client = new Twitter({
    consumer_key: key,
    consumer_secret: secret,
    access_token_key: acc_key,
    access_token_secret: acc_secret,
  })

  const emitter = new EventEmitter()

  function poll () {
    client.get(api, {track: track}, function(err, tweets, res) {

      // bail
      if(error) {
        emitter.emit('error', err)
      }

      emitter.emit('message', {response: res, tweets: tweets})
    })
  }

  setInterval(poll, 500)

  return emitter
}

export default makeConnection
