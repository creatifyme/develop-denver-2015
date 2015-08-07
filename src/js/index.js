/**
 * Dependencies
 */
import speakerbox from './modules/speakerbox'
import TweetStream from './TweetStream'

TweetStream(twitterSocket)
  // transform data...
  .subscribe(/* render app */)
