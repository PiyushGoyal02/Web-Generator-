const mongoose = require("mongoose");

const tileModelSchema = new mongoose.Schema({
  tile:{
    type:String,
    required:true
  },

  user:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"User",
    required:true
  }
})

const Tiles = mongoose.model("TileNaam", tileModelSchema)
module.exports.Tiles