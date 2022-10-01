import express from "express"
import { Login, register } from "../controllers/auth.controller.js";
import { verifyToken } from "../services/token.service.js";

export default app=>{
const route = express.Router();

route.post("/register",register);
route.post("/login", Login)


app.use("/api/auth", route);


}