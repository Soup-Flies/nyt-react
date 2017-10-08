require("dotenv").config();
var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
var mongoose = require("mongoose");

mongoose.Promise = Promise;



var app = express();

// Configure app with morgan and body parser
app.use(logger("dev"));
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());

// Static file support with public folder
app.use(express.static("../app/build"));

// Database configuration for mongoose
console.log(process.env.MONGODB_URI)
mongoose.connect(process.env.MONGODB_URI);
// Hook mongoose connection to db
var db = mongoose.connection;

// Log any mongoose errors
db.on("error", function (error) {
  console.log("Mongoose Error: ", error);
});

// Log a success message when we connect to our mongoDB collection with no issues
db.once("open", function () {
  console.log("Mongoose connection successful.");
});

app.post("/articlesearch", function (req, res) {
  console.log(`we gots paydirt ${req.body}`);
  res.json({ hello: "world" });
  // fetch(
  //   `http://api.nytimes.com/svc/search/v1/article?format=json&query=${this
  //     .search.topic}&begin_date=${this.search.start}&end_date=${this.search
  //     .end}&api-key=${nyt}`
  // )
  //   .then(response => {
  //     var contentType = response.headers.get("content-type");
  //     if (contentType && contentType.includes("application/json")) {
  //       return response.json();
  //     }
  //     throw new TypeError("Oops, we haven't got JSON!");
  //   })
  //   .then(json => {
  //     console.log(json);
  //     this.setState({ json });
  //   })
  //   .catch(error => {
  //     console.log(error);
  //   });
});

app.post("/articlesearch", function (req, res) {
  console.log("WE DID STUFF");
});

app.listen(8080, function () {
  console.log("App running on port 8080!");
});
