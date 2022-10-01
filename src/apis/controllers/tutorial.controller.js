import db from "../models/index.js"
import tutorialModel from "../services/tutorial.service.js";
import createError from "http-errors";
const Tutorial = db.tutorial;



export const addTutorial = async(req, res, next)=>{

    const tutBody={
        name:req.body.name,
        category:req.body.category

    }  

    try{
     const newTutorial = await tutorialModel.saveTutorial(tutBody);
     if(!newTutorial) return next(createError(401, "something went wrong adding tutorial"));

      res.send({message:"tutorial created",newTutorial});

    }catch(error)
    {
  next(error)
    }






}

export const allTutorial = async(req, res, next)=>{
    try{
  const tutorials = await tutorialModel.getAllTutorial();
  if(!tutorials) return next(createError(401,"no data found"))

  res.send(tutorials)

    }catch(error){
        next(error)
    }
}