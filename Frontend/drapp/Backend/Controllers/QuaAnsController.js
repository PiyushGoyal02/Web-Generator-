
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


// Tile Name Data
exports.storeTileName = async (req, res) => {
    try{

        const { tileName } = req.body;

        const userId = req.User.id

        if(!tileName){
            return res.status(400).json(
                {
                    success:false,
                    message:"Tile Name is Required"
                }
            )
        }

        const updateTileName = await User.findByIdAndUpdate(
            userId,
            {
                $push: {
                    tileName:tileName,
                    user:userId
                }
            },
            {new:true}
        )

        return res.status(200).json(
            {
                success:true,
                message:"SuccessFully TileName Updated",
                data : updateTileName
            }
        )


    }catch(error){
        console.log(error)
        return res.status(500).json(
            {
                success:false,
                message:"Tile Data Not Updated Try Again"
            }
        )
    }
}