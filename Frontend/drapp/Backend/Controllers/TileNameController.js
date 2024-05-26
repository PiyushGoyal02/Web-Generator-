const User = require("../Model/User")
const TileName = require("../Model/TileNameModel");

exports.storeTileName = async (req, res) => {
    try{

        const { tileName, date, time } = req.body;

        const userId = req.User.id

        if(!tileName && !date && !time){
            return res.status(400).json(
                {
                    success:false,
                    message:"Tile Name,Time and Date is Required"
                }
            )
        }

        const updateTileName = await User.findByIdAndUpdate(
            userId,
            {
                $push: {
                    tile:{
                        tileName:tileName,
                        time:time,
                        date:date
                    }
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