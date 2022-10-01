import JWT from "jsonwebtoken"
import dotenv from "dotenv"
import createError from "http-errors"
dotenv.config()





export const generateAuthToken =(user)=>{

const token =  JWT.sign({user:user}, process.env.JWTTOKEN,{expiresIn:3600});
const refresh_token =  JWT.sign({user:user}, process.env.REFRESH_TOKEN ,{expiresIn:process.env.REFRESH_EXPIRE});


const tokens ={
    accessToken:token,
    refreshToken:refresh_token

}

return tokens;
}



export const generateToken =(user)=>{

    const token =  JWT.sign({user:user}, process.env.JWTTOKEN,{expiresIn:process.env.JWTTOKEN});
 
    return token;
    }

    export const verifyToken = (req, res, next)=>{
        const autheader = req.headers.token;
     if(!autheader) return next(createError(400, "provide a token"))
              const token = autheader.split(" ")[1];
        
                 JWT.verify(token, process.env.JWTTOKEN, (err, user)=>{
                    if(err) return next(createError(401, "invalid token"))
                   
                    req.user =user;
                    next();
                 })
    
    }




    export const verifyUser = (req, res, next)=>{
        verifyToken(req, res, next, ()=>{
            if(req.user.id === req.params.id || req.user.isAdmin){
                next()
            }else{
                res.status(403).send({message:"Only admin required"});
    
            }
        })
    }
    
    
    export const verifyAdmin= (req, res, next)=>{
        verifyToken(req,res, next, ()=>{
            if(req.user.isAdmin){
                next()
            }
            res.status(403).send({message:"Only admin required"})
        })
    }