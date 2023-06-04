const db = require('../utils/database');
const { DataTypes } = require('sequelize');

const Users = db.define('users', {
id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
},
username: {
    type: DataTypes.STRING(100),
    allowNull: false,
    unique: true,
}, 
email: {
    type: DataTypes.STRING(50),
    allowNull: false,
    unique: true,
    validate: {
        isEmail: true,
    }
}, 
password: {
    type: DataTypes.STRING,
    allowNull: false,
},
},
{ 
    timestamps: false,
    
}); 

module.exports = Users;