const router = require("express").Router();
const passport = require("passport");
const Post = require("../models/postModel");

router.post(
  "/add",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    let text = req.body.text.trim();

    const newPost = new Post({
      user: {
        id: req.user.id,
        login: req.user.login,
      },
      text: text,
    });

    newPost
      .save()
      .then((post) => res.status(200).json(post))
      .catch((err) => res.status(404).json(err));
  }
);

router.get("/", (req, res) => {
  Post.find()
    .sort({ createdAt: -1 })
    .then((posts) => res.status(200).json(posts))
    .catch((err) => res.status(404).json(err));
});

module.exports = router;
