const http = require('http');

const server = http.createServer(requestListener);

function requestListener(request, response) {
  // console.log(request);
  // console.log(response);

  response.end('hello from node server!');

}

server.listen(5000);
