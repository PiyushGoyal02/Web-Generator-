const JWT = require("jsonwebtoken");
const User = require("../Model/User");
require("dotenv").config();

exports.auth = async (req, res, next) => {
    try{

        // Token Need
        const token = req.body.token || req.cookies.Healee;

        // Validation Check
        if(!token){
            return res.status(401).json(
                {
                    success:false,
                    message:"Missing a token"
                }
            )
        }

        try{
            const decode = JWT.verify(token, process.env.JWT_SECRET)
            console.log("decode", decode)
            req.body = decode;
        }catch(error){
            return res.status(500).json(
                {
                    success:false,
                    message:"Invalid Tokon"
                }
            )
        }

        next();     // Next Function Par Jaane kai Liye
    }catch(error){
        return res.status(401).json({
            success:false,
            message:'Something went wrong while validating the token',
        });
    }
}


// isUser

exports.isUser = async (req, res, next) => {
    try{

        const accountType = req.User.accountType;

        if(!accountType){
            return res.status(403).json(
                {
                    success:false,
                    message:"Account Type Missing"
                }
            )
        }

        if(accountType === "User"){
            return res.status(200).json(
                {
                    success:true,
                    message:"Welcome Healee Medical App "
                }
            )
        }else{
            return res.status(403).josn(
                {
                    success:false,
                    message:"This is Procted Route Only For User.."
                }
            )
        }

        next();
    }catch(error){
        return res.status(500).josn(
            {
                success:false,
                message:"User Roled Cannot be Verifed Please try Again..."
            }
        )
    }
}


// isAdmin

exports.isAdmin = async (req, res, next) => {
    try{

        const accountType = req.User.accountType;

        if(!accountType){
            return res.status(403).json(
                {
                    success:false,
                    message:"Account Type Missing"
                }
            )
        }

        if(accountType === "Admin"){
            return res.status(200).json(
                {
                    success:true,
                    message:"Welcome Healee Medical App "
                }
            )
        }else{
            return res.status(403).josn(
                {
                    success:false,
                    message:"This is Procted Route Only For Admin.."
                }
            )
        }

        next();
    }catch(error){
        return res.status(500).josn(
            {
                success:false,
                message:"Admin Roled Cannot be Verifed Please try Again..."
            }
        )
    }
}