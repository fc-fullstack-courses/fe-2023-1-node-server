const { User } = require('../models');

module.exports.getUsers = (req, res, next) => {
  User.findAll().then((users) => {
    res.send(users);
  });
};

module.exports.getUser = (req, res, next) => {
  const {
    query,
    params: { id: userId },
  } = req;
  User.findOne(userId).then((user) => {
    res.send(user);
  });
};

module.exports.createUser = (req, res, next) => {
  new User(req.body).then((user) => {
    res.send(user);
  });
};

module.exports.deleteUser = (req, res, next) => {
  const {
    params: { id },
  } = req;

  User.deleteById(id).then((isDeleted) => {
    res.send(isDeleted);
  });
};

module.exports.updateUser = (req, res, next) => {
  const { body: userData, user } = req;

  user.update(userData).then((updatedUser) => {
    res.send(updatedUser);
  });
};
