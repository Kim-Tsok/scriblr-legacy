const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const bookSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    about: {
      type: String,
      required: true,
    },
    cover: {
      type: Object,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    filename: { type: String, required: false },
    fileId: { type: Schema.Types.ObjectId, required: false }, // Reference to GridFS file
    filepath: { type: String, required: false }, // Optional: If you're storing files externally or need a path
    filetype: { type: String, required: false },
    size: { type: Number, required: false },
    uploadDate: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

module.exports = mongoose.model("book", bookSchema);
