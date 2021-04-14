const router = require("express").Router();
const validateUser = require("../validator/userValidate");
const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const saltRounds = 8;

router.post("/register", async (req, res) => {
  const { isValid, errors } = validateUser(req.body);

  if (!isValid) {
    let user = await User.findOne({ email: req.body.email });
    if (user) errors.email = "email was used";
    res.status(404).json({ errors: errors });
  }

  let hashedPassword = await bcrypt.hashSync(req.body.password, saltRounds);

  const newUser = new User({
    email: req.body.email,
    login: req.body.login,
    password: hashedPassword,
  });
  newUser
    .save()
    .then((newUser) => {
      res.status(200).json(newUser);
    })
    .catch((err) => res.status(404).json(err));
});

module.exports = router;
