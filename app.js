const express = require('express');
const {
  validateUserSignUp,
  validateUserUpdate,
} = require('./middlewares/validate.mv');
const UserController = require('./controllers/userController');
const { findUser } = require('./middlewares/user.mv');

const app = express();
const bodyParser = express.json();

app.get('/users', UserController.getUsers);
app.get('/users/:id', UserController.getUser);
app.delete('/users/:id', UserController.deleteUser);
app.put(
  '/users/:id',
  bodyParser,
  validateUserUpdate,
  findUser,
  UserController.updateUser
);
// розпарсить тіло запиту і покладе його в req.body

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
