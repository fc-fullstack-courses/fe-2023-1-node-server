const express = require('express');
const { validateUserSignUp } = require('./middlewares/validate.mv');
const UserController = require('./controllers/userController');

const app = express();

app.get('/users', UserController.getUsers);

// розпарсить тіло запиту і покладе його в req.body
const bodyParser = express.json();

app.post('/users', bodyParser, validateUserSignUp, UserController.createUser);

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
