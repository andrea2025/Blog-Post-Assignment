const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const userSchema = new Schema({
    name: String,
    email: { type: String, required: true },
    password: { type: String, required: true },
    keyCode:  {type:Number,required:true}
  });

  const user = mongoose.model("User", userSchema);
  module.exports = {user}