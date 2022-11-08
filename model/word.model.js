const { DataTypes} = require('sequelize');
const {sequelize} = require('../config/config.js');


const Word = sequelize.define("words",{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,
    },
    word:{
        type:DataTypes.STRING,
        allowNull:false
    },
    mean:{
        type:DataTypes.STRING,
        allowNull:false
    },
    category:{
        type:DataTypes.STRING,
        allowNull:true
    }
});
const createWordTable = async () => {
    sequelize.sync().then(() => {
        console.log('Word table created successfully!');
    }).catch((error) => {
        console.log('Unable to create table: ', error);
    });
}
module.exports ={
    Word,
    createWordTable
}