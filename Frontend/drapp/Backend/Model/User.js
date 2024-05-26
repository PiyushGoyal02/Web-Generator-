const mongoose = require("mongoose")

const userSchema = new mongoose.Schema(
    {
        firstName: {
            type:String,
            required: true,
        },

        lastName: {
            type:String,
            required: true,
        },

        email: {
            type:String,
            required: true,
        },

        password: {
            type:String,
            required: true,
        },

        dateOfBirth: {
            type:String,
            required: true,
        },

        accountType:{
            type:String,
            required:true,
            enum:["Admin", "User"]
        },

        answers: [
            {
              question: String,
              answer: String,
            },
        ],

        tile:[
            {
                tileName:String,
                time:String,
                date:String
            }
        ],
    }
)

module.exports = mongoose.model("User", userSchema);