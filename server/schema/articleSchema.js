const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ArticleSchema = new Schema({
  topic: {
    type: String
  },
  date: {
    type: String
  },
  url: {
    type: String
  }
});

module.exports = mongoose.model("Article", ArticleSchema);;
