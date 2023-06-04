const Users = require('./users.models');
const Todos = require('./todos.models');
const Categories = require('./categories.models');

const initModels = () => {

Todos.belongsTo(Categories, { foreignKey: "categoriesId"});
Categories.hasMany(Todos, { foreignKey: "categoriesId"});  

    Users.hasMany(Todos, { foreignKey: "todosId"});
    Todos.belongsTo(Users, {foreignKey: "todosId"});

};

module.exports = initModels;