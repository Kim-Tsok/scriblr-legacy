const dotenv = require("dotenv");
const cloudinaryModule = require("cloudinary");

dotenv.config();

const cloudinary = cloudinaryModule.v2;
// Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.CLOUDINARY_URL,
});

module.exports = cloudinary;
