import {
  Subject,
  Observable,
} from 'rx'

export default socket => Observable.create(obs => {
  socket.on('data', data => obs.onNext(data))
  socket.on('errot', data => obs.onError(data))
})
