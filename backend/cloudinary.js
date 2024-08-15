import { config } from "dotenv";
import { v2 } from "cloudinary";

config();

const cloudinary = v2;
// Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

export default cloudinary;
