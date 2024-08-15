import { Schema as _Schema, model } from "mongoose";

const Schema = _Schema;

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

export default model("Email", emailSchema);
