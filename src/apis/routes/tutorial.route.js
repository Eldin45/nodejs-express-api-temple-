import express from "express";
import { addTutorial, allTutorial } from "../controllers/tutorial.controller.js";
import { verifyToken, verifyUser } from "../services/token.service.js";

export default app=>{

const route = express.Router();

route.post("/",addTutorial);
route.get("/",verifyUser,allTutorial);


app.use("/api/tutorial", route);

}