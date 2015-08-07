/**
 * Dependencies
 */
import TweetStream from './TweetStream'
import twitter from './twitter'

TweetStream(twitter({
  api: 'statuses/filter',
  track: {track: 'dvlpdnvr'},
  key: '4a82KzzoQqmbB9GoeXohQ',
  secret: 'ZVYYIxWTH1ujEge0SliIPptFF0M4hRpi5Vb1fDjhCbY',
  acc_key: '64105403-PIrbbf7ekv1uCqvgROMLJwngySSwmnom5oO66wJRn',
  acc_secret: '0j59mARrd1ORgGTaprdRhGZf6rhhZrCf7tmJncg',
}))
  .subscribe((data => console.log(data)))
