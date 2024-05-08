const User = require("../Model/User");
const bcrypt = require("bcrypt");
const JWT = require("jsonwebtoken");
require("dotenv").config();

// Sign up

exports.Signup = async (req, res) => {
    try{
        const {firstName, lastName, email, password, confirmPassword, dateOfBirth, accountType} = req.body;

        // validation Check
        if(!firstName || !lastName || !email || !password || !confirmPassword || !dateOfBirth || !accountType){
            return res.status(400).json(
                {
                    success:false,
                    message:"All Field Are Required.."
                }
            )
        }

        // Password ConfirmPass Matched
        if(password !== confirmPassword){
            return res.status(400).json(
                {
                    success:false,
                    message:"Password CanNot Matched.."
                }
            )
        }

        // Check User Already Exits or Not
        const existEmail = await User.findOne({email});

        // Validation Check existEmail
        if(existEmail){
            return res.status(400).json(
                {
                    success:false,
                    message:"Sorry This User Already Exist.."
                }
            )
        }

        const hashPass = await bcrypt.hash(password, 10);
        console.log("HashPassword", hashPass);

        const UserCreate = await User.create(
            {
                firstName,
                lastName,
                email,
                password:hashPass,
                dateOfBirth,
                accountType
            }
        );

        // Responce return 
        return res.status(201).json(
            {
                success:true,
                UserCreate,
                message:"User is Registered SuccessFully.."
            }
        )

    }catch(error){
        console.log(error)
        return res.status(500).json(
            {
                success:false,
                message:"User CanNot be Registred Please Try Again..."
            }
        )
    }
}



// Sign in
exports.Signin = async (req, res) => {
    try{

        const {email, password} = req.body;

        // Validation Check 
        if(!email || !password){
            return res.status(401).json(
                {
                    success:false,
                    message:"All Field are Required"
                }
            )
        }

        const CheckEmail = await User.findOne({email});

        // Validation CheckEmail
        if(!CheckEmail){
            return res.status(401).josn(
                {
                    success:false,
                    message:"Sorry This Email is Not Registered.."
                }
            )
        }

        const JWTPayLoad = {
            emai:CheckEmail.email,
            id:CheckEmail._id,
            acountType:CheckEmail.acountType
        }

        
        // Compare Password
        if(await bcrypt.compare(password,CheckEmail.password)){
            const token = JWT.sign(JWTPayLoad,process.env.JWT_SECRET,{
                expiresIn:"2h"
            });

            const CookiwOptions = {
                expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
                httpOnly:true   
            }

            // Body Mai Pass Kiya hai 
            CheckEmail.token = token;
            // CheckEmail.password = undefined;       object mai remove kiya 

            // Cookie pass
            res.cookie("Healee", token, CookiwOptions).status(200).json(
                {
                    success:true,
                    message:"Login SuccessFully",
                    token,
                    CheckEmail
                }
            )

        }else{
            return res.status(401).json(
                {
                    success:false,
                    message:"Password is Incorret.."
                }
            )
        }

    }catch(error){
        return res.status(500).json(
            {
                success:false,
                message:"Cannot Login.... Please try Again"
            }
        )
    }
}