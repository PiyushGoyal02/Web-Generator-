const mongoose = require("mongoose");

const tileModelSchema = new mongoose.Schema({
  tile:{
    type:String,
    required:true
  },

  date:{
    type:String,
    required: true
  },

  time:{
    type:String,
    required:true
  },

  // These Using User ID
  user:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"User",
    required:true
  }
})

const Tiles = mongoose.model("TileNaam", tileModelSchema)
module.exports.Tiles