//server
var http = require('http');
var url = require('url');

function start(route, handle) {
  function onRequest(request, response) {
    var pathname = url.parse(request.url).pathname;
    console.log("Request for" + pathname + " received");
    route(handle, pathname, response);
    //var content = route(handle, pathname);
    //response.writeHead(200, {"Content-type": 'text/html', 'charset': 'UTF-8'});
    //response.write(execute(say, content));
    //response.end();
  }

  http.createServer(onRequest).listen(8888);
  console.log('Server has started');
}

exports.start = start;

function say(word) {
  return "<h1>" + word + "<h1>";
}

function execute(getSay, value) {
  return getSay(value);
}

