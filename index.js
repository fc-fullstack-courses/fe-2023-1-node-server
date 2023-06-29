const http = require('http');

const server = http.createServer(requestListener);

let users = [
  {
    id: 0,
    login: 'test',
    password: '12345',
  },
];

function requestListener(request, response) {
  const { url, method } = request;
  // console.log(request);
  // console.log(response);

  // response.end(`hello from node server! your url is ${url} and method is ${method}`);

  if (url === '/') {
    if (method === 'GET') {
      response.end('<h1>Welcome to homepage</h1>');
    }
  } else if (url === '/users') {
    if (method === 'GET') {
      response.end(JSON.stringify(users));
    } else if (method === 'POST') {
      // debugger;
      let jsonString = '';

      request.on('data', (chunk) => {
        jsonString += chunk;
      });

      request.on('end', () => {
        const user = JSON.parse(jsonString);

        user.id = Date.now();

        users.push(user);

        response.end(JSON.stringify(user));
      });
    }
  }
}

server.listen(5000);
