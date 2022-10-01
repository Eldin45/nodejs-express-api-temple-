import joi from "joi"

export const regVal = joi.object({
    name:joi.string().min(4).required(),
    phone:joi.string().length(11).pattern(/^[0-9]+$/).required(),
    password:joi.string().required().min(8) 
})


export const logVal = joi.object({
    phone:joi.string().length(11).pattern(/^[0-9]+$/).required(),
    password:joi.string().min(8).required()
})