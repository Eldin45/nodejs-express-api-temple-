import db from "../models/index.js"
import bcrypt from "bcryptjs";


const userModel = db.user;



const userLogin  = (phone)=>{

    const logUser = userModel.findOne({where:{phone:phone}})

     return logUser;

} 

const encryptPassword = (password)=>{
    const salt  = bcrypt.genSaltSync(6);
    const hashPass = bcrypt.hashSync(password,salt)
  

  return hashPass;

}

const decryptPassword = (password, hashPass)=>{
    const decrypt =  bcrypt.compare(password, hashPass)
    return decrypt
}


export default {userLogin, encryptPassword, decryptPassword}