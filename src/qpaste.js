var restify = require('restify');
var db = require('riak-js').getClient({host: "127.0.0.1", port: "8098", debug: true});


function respond(req, res, next) {
  res.send('hello ' + req.params.name);
}

var server = restify.createServer({
  name: 'qPaste'
});
server.pre(restify.pre.userAgentConnection());
server.get('/hia/:name', respond);
server.head('/hia/:name', respond);

server.listen(8080, function() {
  console.log('%s listening at %s', server.name, server.url);
});
