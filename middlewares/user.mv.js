const { User } = require('../models');

module.exports.findUser = (req, res, next) => {
  const {
    params: { id },
  } = req;

  User.findOne(id)
    .then((user) => {
      if (user) {
        req.user = user;
        next();
      } else {
        throw new Error('User not found');
      }
    })
    .catch((err) => {
      res.send(err.message);
    });
};
