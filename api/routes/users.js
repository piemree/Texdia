const router = require("express").Router();
const validateUser = require("../validator/userValidate");
const validateLogin = require("../validator/loginValidate");
const User = require("../models/userModel");
const jwt = require("jsonwebtoken");
const passport = require("passport");
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

router.post("/login", async (req, res) => {
  let { errors, isValid } = await validateLogin(req.body);

  if (!isValid) return res.status(404).json(errors);

  let user = await User.findOne({ email: req.body.email });

  if (!user) {
    errors.email = "email not registered";
    return res.status(404).json(errors);
  }

  const match = await bcrypt.compare(req.body.password, user.password);

  if (!match) {
    errors.password = "wrong password";
    return res.status(404).json(errors);
  }

  let token = await jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
    expiresIn: "1d",
  });

  res.status(200).json({ token, user });
});

router.get(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    res.status(200).json({
      _id: req.user._id,
      email: req.user.email,
      login: req.user.login,
      followers: req.user.followers,
      following: req.user.following,
    });
  }
);

module.exports = router;
