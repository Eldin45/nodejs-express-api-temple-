

export default (sequelize, Sequelize)=>{
 const Users = sequelize.define("user_tb", {
    user_id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
            name:{
                type:Sequelize.STRING,
                allowNull:false
                
            }, 
            phone:{
                type:Sequelize.STRING,
                allowNull:false
                
            },    
            
            
            password:{
                type:Sequelize.STRING,
                allowNull:false
                
            }

            

 }
 )
return Users

}