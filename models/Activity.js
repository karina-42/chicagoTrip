const mongoose = require("mongoose");

const ActivitySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  loves: {
    type: Number,
    required: true,
  },
  likes: {
    type: Number,
    required: true,
  },
  dislikes: {
    type: Number,
    required: true,
  },
  price: {
    type: String,
  },
  typeOfActivity: {
    type: String,
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  suggestedBy: {
    type: String,
    ref: "User"
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

//mongodb collection named here will give lowercase plural of name
module.exports = mongoose.model("Activity", ActivitySchema);
