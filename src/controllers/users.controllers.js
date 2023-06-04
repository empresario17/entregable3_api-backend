const UsersServices = require('../services/users.service'); // con este metodo llamo al modelo usuarios

const createNewUser = async (req, res) => {
    try {
        const newUser = req.body;
        const result = await UsersServices.create(newUser);
        res.status(201).json(result);

    }catch (error) {
        res.status(400).json(error);
    }
}

const getTodosUserByUser = async (req, res) => {
    // esta funcion permite consultar los usuarios y las tareas creadas
try {
    const {id} = req.params;
const result = await UsersServices.geTodosByUserId(id);
res.status(200).json(result);
}catch (error) {
    res.status(400).json(error);
}
};

module.exports = {
    createNewUser,
    getTodosUserByUser
}