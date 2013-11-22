var restify = require('restify');
var db = require('riak-js').getClient({host: "127.0.0.1", port: "8098", debug: true});
/*
db.save('airlines', 'KLM', {fleet: 111, country: 'NL'}, { links:
  [{ bucket: 'flights', key: 'KLM-8098', tag: 'cargo' },
   { bucket: 'flights', key: 'KLM-1196', tag: 'passenger' }]
});
*/
/*
db.get('flights', 'KLM-5034', function(err, flight, meta) {
  if (err) throw err;
  flight.status = 'delayed';
  meta.links.push({ bucket: 'airlines', key: 'IBE', tag: 'operated_by' });
  db.save('flights', 'KLM-5034', flight, meta);
});
*/


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
