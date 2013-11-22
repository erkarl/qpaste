var restify = require('restify');

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
