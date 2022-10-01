import db from "../models/index.js"
const Tutorial = db.tutorial;



const saveTutorial =(tutBody)=>{

    const addTutorial = Tutorial.create(tutBody)

  return addTutorial    

}


const getAllTutorial =()=>{

    const allTutorial  = Tutorial.findAll()
return allTutorial
}

export default {saveTutorial, getAllTutorial};