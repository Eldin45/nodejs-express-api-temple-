
import Sequelize from "sequelize"
import dbConfig from "../../configs/db.config.js"


const sequelize = new Sequelize(dbConfig.DBNAME, dbConfig.DBUSER, dbConfig.DBPASS,{
    host:dbConfig.DBHOST,
    dialect:dbConfig.DIALECT,

    Pool:{
        min:dbConfig.min,
        max:dbConfig.max,
        acquire:dbConfig.acquire
    }
}
)


const db = {}

db.sequelize = sequelize;
db.Sequelize = Sequelize;

import tutorial from "./tutorial.model.js"
import user from "./user.model.js"

db.tutorial = tutorial(sequelize, Sequelize);
db.user = user(sequelize, Sequelize);

export default db;
