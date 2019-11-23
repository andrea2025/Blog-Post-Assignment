const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const userSchema = new Schema({
    name: String,
    email: { type: String, required: true },
    password: { type: String, required: true },
  });
  
  
const blogSchema = new Schema({
    title: String,
    url: { type: String, required: true },
    content: { type: String, required: true },
    author: { type: String, required: true },
    created_at: { type: Date, default: Date.now }
  });
  
  const blog = mongoose.model("BlogList", userSchema);
  const user = mongoose.model("BlogList", blogSchema);

  module.exports = {user, blog}