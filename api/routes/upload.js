const router = require("express").Router();

const fileUpload = require("express-fileupload");
const passport = require("passport");
const User = require("../models/userModel");

/* router.use(
  fileUpload({
    limits: { fileSize: 50 * 1024 * 1024 },
    useTempFiles: true,
    tempFileDir: "./uploads",
  })
);
 */
router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
      
    const userId = req.user.id; // the uploaded file object

    const currUser = await User.findByIdAndUpdate(
      userId,
      { picture: req.body.picture },
      { new: true }
    ); 

    res.status(200).json({picture:currUser});
  }
);

module.exports = router;
