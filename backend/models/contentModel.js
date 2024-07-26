const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const contentSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    about: {
      type: String,
      required: true,
    },
    imageUrl: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("content", contentSchema);
