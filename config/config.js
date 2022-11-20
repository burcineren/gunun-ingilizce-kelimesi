const {Sequelize} = require('sequelize');
const dbo = require('../config/database.js');

const sequelize = new Sequelize(dbo.database, dbo.username, dbo.password, {
        host: dbo.host,
        dialect: dbo.dialect,
    }
);



const connect = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}


module.exports = {
    connect,
    sequelize
}