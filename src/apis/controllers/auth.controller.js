import httpStatus from "http-status";
import catchAsync from "../../utils/catch-async.js";
import db from  "../models/index.js";
import createUser from "../services/user.service.js";
//import db from "../models/user.model.js";
import bcrypt from "bcryptjs"
import createError from "http-errors"
import { generateToken, generateAuthToken } from "../services/token.service.js";
 import authService from "../services/auth.service.js";
 import { logVal, regVal } from "../validations/auth.validation.js";
import dotenv from "dotenv";
dotenv.config()
const user = db.user;

export const register = async(req, res, next)=>{


 
    const userData= {
        name:req.body.name,
        phone:req.body.phone,
        password:req.body.password
       }


const validation = regVal.validate(userData);
if(validation.error) return next(createError(401, validation.error.message))

    try{

        const existingUser = await user.findOne({where:{phone:req.body.phone}})
    if(existingUser) return next(createError(httpStatus.BAD_REQUEST, "User already exist"));

        const newUser = await createUser(userData)
        if(!newUser) return next(createError(400, "Something went wrong user creation failed"))
       
         const token = generateAuthToken(newUser.user_id, process.env.JWTTOKEN,3600)
         //const token = JWT.sign({_id:newUser.user_id}, process.env.JWTSECRET,{expiresIn:3600})
        res.status(httpStatus.CREATED).send({newUser, token});

    }catch(error)
    {
        next(error);

    }


}


export const Login = async(req, res, next)=>{

    const pass = req.body.password
    const phone = req.body.phone

     
const validation = logVal.validate({phone:phone, password:pass});
if(validation.error) return next(createError(401, validation.error.message))
     try{

         const  checkUser = await authService.userLogin(req.body.phone);
         if(!checkUser) return next(createError(401, "Invalid phone number"))
             
         const isValidPass = await authService.decryptPassword(pass,checkUser.password)
         if(!isValidPass) return next(createError(401,"Invalid password"));

         const token = generateAuthToken(checkUser.user_id)

         res.send({message:"success", userId:checkUser.user_id,token});

         

     }catch(error)
     {
      next(error)
     }



}

