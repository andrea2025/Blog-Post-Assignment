const mongoose = require("mongoose");
const Schema = mongoose.Schema;



  
const blogSchema = new Schema({
    title: String,
    url: { type: String, required: true },
    content: { type: String, required: true },
    author: { type: String, required: true },
    created_at: { type: Date, default: Date.now }
  });
  
 
  const blog = mongoose.model("BlogList", blogSchema);

  module.exports = {blog}