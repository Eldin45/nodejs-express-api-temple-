

export default (sequelize, Sequelize)=>{
  const Tutorials  = sequelize.define("tutorial", {

    tutorial_id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
     name:{
                type:Sequelize.STRING,
                allowNull:false
                
            }, 
     category:{
                type:Sequelize.STRING
            }, 
            

            },
            {
                timestamp:true
            }
            )

  return Tutorials
}