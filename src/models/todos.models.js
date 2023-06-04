const db = require('../utils/database');
const { DataTypes } = require('sequelize');

const Todos = db.define('todos', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    title: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },
    description: {
type: DataTypes.TEXT(),
allowNull: false,
    },
completed: {
    type: DataTypes.BOOLEAN,
    defaultValue: false, //si la tarea esta vacia me devuelve un false y si esta llena un true
},

assignedUser: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'assigned_user'
  }, 
  
categoriesId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'categories_id',
}, 
},
{ 
    timestamps: true,
    updatedAt: false,
    createdAt: 'created_at', 
});

module.exports = Todos;