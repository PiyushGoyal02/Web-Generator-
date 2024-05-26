// const dateTimeModel = require("../Model/DateTimeModel");
// const User = require("../Model/User");

// exports.dateTimeLogic = async (req, res) => {
//     try{

//         // Fetch Data on req body(date, time)
//         const {date, time} = req.body;

//         const userID = req.User.id;

//         // Validation Check (Date, time)
//         if(!date && !time){
//             return res.status(401).json(
//                 {
//                     success:false,
//                     message:"Date, Time Not Not Valid"
//                 }
//             )
//         }

//         const updatedValueTimeDate = await User.findByIdAndUpdate(
//             userID,
//             {
//                 $push:{
//                     dateTime:{
//                         date:date,
//                         time:time,
//                         user:userID
//                     }
//                 }
//             },
//             {new:true}
//         )

//         return res.status(200).json(
//             {
//                 success:true,
//                 message:"Date And Time Successfully Update..",
//                 data:updatedValueTimeDate
//             }
//         )

//     }catch(error){
//         console.log(error)
//         return res.status(500).json(
//             {
//                 success:false,
//                 message:"Date And Time Not Updated Please Try Again...!"
//             }
//         )
//     }
// }