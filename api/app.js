const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const users = require("./routes/users");
const posts = require("./routes/posts");
const upload = require("./routes/upload");

require("dotenv").config();
const passport = require("passport");
const port = process.env.PORT || 5000;

//const multer = require('multer')
//const uploads = multer({ dest: 'uploads/' })

app.use(cors());
app.use(express.urlencoded({ limit: "50mb", extended: true }));
app.use(express.json({ limit: "50mb", extended: true }));
//app.use(uploads.array());

const URI = process.env.MONGODB_URL || "mongodb://localhost:27017/test";

mongoose
  .connect(URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((response) => {
    console.log("connection success");
  })
  .catch((err) => {
    console.log(err.message);
  });

app.use(passport.initialize());

require("./config/password")(passport);

app.use("/api/users", users);
app.use("/api/posts", posts);
app.use("/api/upload", upload);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
