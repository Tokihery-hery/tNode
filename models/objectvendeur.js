
module.exports = (sequelize, Sequelize)=>{
    const Vendeur= sequelize.define('vendeur', {
        id: 
        {
            type: Sequelize.INTEGER,
            autoIncrement:true,
            primaryKey:true
        },
        name: {
            type:Sequelize.STRING
        },
        mail:{
            type: Sequelize.STRING
        },
        password:{
            type: Sequelize.STRING
        },
        description:{
            type: Sequelize.STRING
        },
        siege:{
            type: Sequelize.STRING
        },
        contact:{
            type: Sequelize.STRING
        },
        ville:{
            type: Sequelize.STRING
        }
        ,
        region:{
            type: Sequelize.STRING
        }
        ,
        pdp:{
            type: Sequelize.STRING
        },
        vente:{
            type: Sequelize.STRING
        },
        categorie:{
            type: Sequelize.STRING
        },
        createAt:{
            type: Sequelize.STRING
        }
    })
    return Vendeur
}