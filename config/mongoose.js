const mongoose = require("mongoose");

const db = "mongodb://127.0.0.1:27017/placement_app";

mongoose
  .connect(db)
  .then(() => {
    console.log("Connected to Database");
  })
  .catch((err) => {
    console.log("Error in connecting with Database: ", +err);
  });

module.exports = mongoose;