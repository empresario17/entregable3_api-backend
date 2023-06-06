const Categories = require('../models/categories.models');
const Todos = require('../models/todos.models');
const TodosService = require('../services/todos.service');

const createNewTodo = async (req, res) => {
    try {
        const newTodo = req.body;
        const result = await TodosService.create(newTodo);
        res.status(201).json(result);
    }catch (error) {
        res.status(400).json(error);
    }
};

const getTodosWhitId = async (req, res) => {
    try { // para obtener las tareas con el ID del usuario que la creo
        const {todoId} = req.params;
        const result = await TodosService.getTodosUser(todoId);
        res.json(result);
    
    } catch (error) {
        res.status(400).json(error);
    }
};

const getAllTodosUsers = async (req, res) => { // para traerme todas las tareas creadas, con sus categorias y usuario que la creo
    try {
        const AllTodos = await Todos.findAll();
        res.json(AllTodos);
    } catch (error){
        res.status(400).json(error)
    }
};
const getAllCategories = async (req, res) => { // para traerme todas las categorias creadas
    try {
        const AllCategories = await Categories.findAll();
        res.json(AllCategories);
    } catch (error){
        res.status(400).json(error)
    }
};
const updateTodo = async (req, res) => {
    try {
        const {id} = req.params;
        const updateTodoData = req.body;
        await TodosService.Update(id, updateTodoData);
        res.status(204).send();
        
    } catch (error) {
        res.status(400).json(error);

    }
};

const deleteTodo = async (req, res) => {
    try {
        const {id} = req.params;
        await TodosService.delete(id);
        res.status(204).send();

    }catch (error) {
        res.status(400).json(error);
    }
};

const deleteCategory = async (req, res) => {
    try {
        const {id} = req.params;
        await TodosService.deleteCategories(id);
        res.status(204).send();

    }catch (error) {
        res.status(400).json(error);
    }
};

module.exports = {
createNewTodo,
getTodosWhitId,
updateTodo,
deleteTodo,
getAllTodosUsers,
deleteCategory,
getAllCategories

};