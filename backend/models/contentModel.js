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
    image: {
      public_id: String,
      url: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("content", contentSchema);
