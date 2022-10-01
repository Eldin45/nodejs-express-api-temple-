import dotenv from "dotenv"
dotenv.config()


export default {
    DBNAME: process.env.DBNAME,
    DBHOST:process.env.DBHOST,
    DBUSER:process.env.DBUSER,
    DBPASS: process.env.DBPASS,
    DIALECT:process.env.DIALECT,


    pool:{
        max:process.env.MAX,
        min:process.env.MIN,
        acquired:process.env.ACQUIERED
    }

}