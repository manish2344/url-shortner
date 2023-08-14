const mongoose = require("mongoose");
// const nanoid  = require("nanoid");
// const {nanoid} = require(nanoid);
const shortId = require('shortid')

const shortSchema = new mongoose.Schema({
  full: {
    type: String,
    required: true,
  },
  short: {
    type: String,
    required: true,
    default: shortId.generate,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    expires: 3600,
  },
});
const shortUrl= mongoose.model("ShortUrl", shortSchema);
module.exports = shortUrl;



