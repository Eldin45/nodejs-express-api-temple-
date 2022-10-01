import express from "express"
import dotenv from "dotenv"
import db from "../apis/models/index.js"
import authRoute from "../apis/routes/auth.route.js"
import httpError from "../utils/http-error.js"
import newRateLimit from "../middlewares/rate-limit.js";
import tutorialRoute from "../apis/routes/tutorial.route.js"

dotenv.config()



export default ()=>{

const app = express();

app.use(express.json());


db.sequelize.sync();
app.use(newRateLimit)
authRoute(app);
tutorialRoute(app);
app.use(httpError)



app.listen(process.env.PORT,()=>{
    console.log(`server running on ${process.env.PORT}`);
})



return app

}