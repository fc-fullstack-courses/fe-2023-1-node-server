const express = require('express');
const { validateUserSignUp } = require('./middlewares/validate.mv');

const app = express();

const users = [
  {
    id: 0,
    login: 'test',
    password: '12345',
  },
];

app.get(
  '/',
  (req, res, next) => {
    console.log('first handler');
    req.secret = '12345';
    next();
  },
  (req, res, next) => {
    console.log('second handler');
    console.log(req.secret);
    next();
  },
  (req, res, next) => {
    // console.log(request);
    // console.log(response);
    console.log('last handler');
    // res.end('<h1>hello from express</h1>');
    res.send('<h1>hello from express</h1>');
  }
);

app.get('/users', (req, res, next) => {
  res.send(users);
});

// розпарсить тіло запиту і покладе його в req.body
const bodyParser = express.json();

app.post(
  '/users',
  bodyParser,
  validateUserSignUp,
  (req, res, next) => {
    const user = {
      ...req.body,
      id: Date.now(),
    };

    users.push(user);

    res.send(user);
  }
);

// app.post();
// app.put();
// app.patch();
// app.delete();

app.get('/users');

app.get('*', (req, res) => {
  res.send(`path is ${req.path} and method is ${req.method}`);
});

app.listen(5000, () => {
  console.log('Server started on port 5000');
});
