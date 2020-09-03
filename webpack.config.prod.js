const imagemin = require("imagemin");
const webp = require("imagemin-webp");

imagemin(["images/*.{jpg,png}"], {
  destination: "build/images",
  plugins: [webp({ quality: 60 })],
});
