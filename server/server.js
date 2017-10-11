require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const logger = require("morgan");
const mongoose = require("mongoose");
const request = require('request');
const moment = require('moment');
const db = require('./models/articleModel.js');

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

  if (req.body.start.length != 4 || req.body.end.length != 4) {
    req.body.start = 1990
    req.body.end = 1991;
  };

  const search = {
    q: req.body.topic,
    begin_date: parseInt(req.body.start + "0101"),
    end_date: parseInt(req.body.end + "1231")
  }

  const options = {
    method: 'GET',
    url: `http://api.nytimes.com/svc/search/v2/articlesearch.json`,
    qs: search,
    headers: {
      'api-key': process.env.NYT
    }
  };

  request(
    options, (err, response) => {
      if (!err) {
        res.send(response.body);
      } else {
        console.log(err)
      }
    }
  )

});

app.get("/savedarticles", function (req, res) {
  db.getArticles((req, res))
});

app.listen(8080, function () {
  console.log("App running on port 8080!");
});
