const { USER_CREATION_SCHEMA } = require("../validation/userChemas");

function validateUserSignUp (req, res, next)  {
  USER_CREATION_SCHEMA.validate(req.body)
    .then((validatedUser) => {
      console.log('user is valid');
      next();
    })
    .catch((err) => {
      console.log('user is invalid');
      res.send(err.message);
    });
}

module.exports.validateUserSignUp = validateUserSignUp;