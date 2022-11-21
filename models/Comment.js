const mongoose = require("mongoose");

const CommentSchema = new mongoose.Schema({
  comment: {
    type: String,
    required: true,
  },
  likes: {
    type: Number,
    required: true,
  },
  post: {
    type: mongoose.Schema.Types.ObjectId,
    ref:"Activity",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

//mongodb collection named here will give lowercase plural of name
module.exports = mongoose.model("Comment", CommentSchema);
