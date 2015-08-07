var http = require('http')
var request = require('hyperquest')

/**
 * Simply proxy requests to this server to the echo server.
 */
http.createServer(function (req, res) {
  console.log('proxying...')
  // Log the request.
  req.pipe(process.stdout)
  req
    // Send the request to the echo server.
    .pipe(request('https://stream.twitter.com/1.1/statuses/filter.json?track=twitter', {
      method: req.method
    }))
    // Send the results of the proxy connection back down.
    .pipe(res)
}).listen(4000)
