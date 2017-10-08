var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var RobotSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: "Robot Name is Required"
  },
  power: {
    type: String,
    trim: true,
    required: "Robot Power is Required"
  },
  defense: {
    type: String,
    trim: true,
    required: "Robot Defense is Required"
  }
});

var Robot = mongoose.model("Robot", RobotSchema);

module.exports = Robot;
