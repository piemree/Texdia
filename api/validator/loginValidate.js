const validator = require("validator");


module.exports = async function (data) {
  let errors = {};

  if (!validator.isEmail(data.email)) {
    errors.email = "email is invalid";
  }

  if (validator.isEmpty(data.email)) {
    errors.email = "email field is required";
  }
  if (!validator.isLength(data.password, { min: 8, max: 16 })) {
    errors.password = "password must between 8 and 16 characters";
  }
  if (validator.isEmpty(data.password)) {
    errors.password = "password field is required";
  }

 

  return {
    errors,
    isValid: Object.keys(errors).length === 0,
  };
};
