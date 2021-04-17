const mongoose = require("mongoose");
const { Schema } = mongoose;

const postSchema = new Schema(
  {
    user: {
      type: Object,
      required: true,
    },
    text: {
      type: Object,
      required: true,
    },
  },
  { timestamps: true }
);

const Posts = mongoose.model("Posts", postSchema);

module.exports = Posts;
