import {
  Subject,
  Observable,
} from 'rx'

export default socket => Observable.create(obs => {
  socket.on('message', data => obs.onNext(data))
  socket.on('error', data => obs.onError(data))
})
