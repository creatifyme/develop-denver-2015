/**
 * Dependencies
 */
import TweetStream from './TweetStream'
import twitter from './twitter'

const words = string => string.split(' ')
const tweetBody = tweet = tweet.body

TweetStream(twitter({
  api: 'statuses/filter',
  track: {track: 'dvlpdenver'},
  key: 'HY1S6TbSlCdsUyeWs2N2FvX94',
  secret: 'a8H8Xx6pSoJUyZP68lp6XTOSZY5mV38pWDj6lTk40ENZauSdeB',
  acc_key: '64105403-amFRWE4lPkI7wJYki567wT03heqpAFX4LSnX4qert',
  acc_secret: 'CUfVO9nOOG3dyxArp4ViuU1DFrQosNhL9ncLAtex6CmBp',
}))
  .map(tweetBody)
  .map(words)
  .subscribe(data => console.log(data))
