const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const emailSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
  },
  { timestamps: true }
);

const exists = await this.findOne({ email });

if (exists) {
  throw Error("Email already in use");
}

module.exports = mongoose.model("Email", emailSchema);
