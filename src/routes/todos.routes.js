const { Router } = require("express");

const { createNewTodo, updateTodo, deleteTodo, getTodosWhitId, getAllTodosUsers, } = require('../controllers/todos.controllers');
const { posCategories } = require("../controllers/categories.controllers");

const router = Router();

router.post('/api/createtodos', createNewTodo);

router.put('/api/updatetodos/:id', updateTodo);

router.delete('/api/deletetodos/:id', deleteTodo );

router.get('/api/todos/:todoId', getTodosWhitId );

router.get('/api/alltodos/users', getAllTodosUsers)

router.post('/api/categories/created', posCategories)

module.exports = router;