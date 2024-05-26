
const User = require("../Model/User");
const Question = require("../Model/QuaAnsModel");
const TileModel = require("../Model/TileNameModel")

exports.QuestionAnswer = async (req, res) => {
    
    try{
        const { question, answer } = req.body;
        console.log(question)
        console.log(answer)

        const userId = req.User.id
        // console.log(userId,"userID")

        const UpdatedData = await User.findByIdAndUpdate(
            userId,
            {
                $push:{
                    // answer:{question, answer}
                    answers:{
                        question:question,
                        answer:answer,
                        user:userId
                    }
                }
            },
            {new:true}
        )

        console.log(UpdatedData, " UpdatedData")

        return res.status(200).json(
            {
                success:true,
                message:"SuccessFully Question, answer Created",
                UpdatedData : UpdatedData
            }
        )
    }catch (error) {
    console.log(error.message)
    return res.status(400).json(
        {
            success:false,
            message:"Not SuccessFully Question Answer Please try Again.."
        }
    )
  }
};