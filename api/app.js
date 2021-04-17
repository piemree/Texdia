const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const users=require("./routes/users")
const posts=require("./routes/posts")
require("dotenv").config();
const passport=require("passport")
const port = process.env.PORT;

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
const URI = process.env.MONGODB_URL;

mongoose
  .connect(URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((response) => {
    console.log("connection success");
  })
  .catch((err) => {
    console.log(err.message);
  });

app.use(passport.initialize())

require("./config/password")(passport)

app.use("/api/users",users);
app.use("/api/posts",posts);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
