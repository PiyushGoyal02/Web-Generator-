const mongoose = require("mongoose");

const questionSchema = new mongoose.Schema({
  question:{
    type:String,
    required:true
  },

  answer:{
    type:String,
    required:true
  },

  user:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"User",
    required:true
  }
})

const Questions = mongoose.model("Question", questionSchema)
module.exports.Questions