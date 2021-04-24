const mongoose = require("mongoose");
const { Schema } = mongoose;

const postSchema = new Schema(
  {
    user: {
      type: Schema.Types.Object,
      required: true,
    },
    text: {
      type: Object,
      required: true,
    },
    isLiked: {
      type: Boolean,
      default: false,
    },
    body: Object,

    likes: [],
  },
  { timestamps: true }
);

const Posts = mongoose.model("Posts", postSchema);

module.exports = Posts;
