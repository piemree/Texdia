const validator = require("validator");

module.exports = function (data) {
  let errors = {};

  if (!validator.isEmail(data.email)) {
    errors.email = "email is invalid";
  }

  if (validator.isEmpty(data.email)) {
    errors.email = "email field is required";
  }

  if (validator.isEmpty(data.login)) {
    errors.login = "login field is required";
  }
  if (!validator.isLength(data.password, { min: 8, max: 16 })) {
    errors.password = "password must between 8 and 16 characters";
  }
  if (validator.isEmpty(data.password)) {
    errors.password = "password field is required";
  }
  if (validator.isEmpty(data.password2)) {
    errors.password2 = "confirm password is required";
  }

  if (!validator.equals(data.password, data.password2)) {
    errors.password2 = "passwords are not match";
  }

  return {
    errors,
   
  };
};
