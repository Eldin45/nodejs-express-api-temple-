import httpStatus from "http-status";
import db from "../models/index.js";
import createError from "http-errors"
import encrypt from "../services/auth.service.js"


const user = db.user;

const createUser = async(userBody)=>{
     userBody.password = encrypt.encryptPassword(userBody.password);
    return user.create(userBody)
 
}

export default createUser;