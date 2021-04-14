const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const users=require("./routes/users")
require("dotenv").config();
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

app.use("/api/users",users);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
