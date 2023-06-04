const { Router } = require("express");
const { createNewUser, getTodosUserByUser } = require("../controllers/users.controllers");

const router = Router();

router.post('/api/users', createNewUser);

//router.get('/api/users/:id/todos', getTodosUserByUser)

module.exports = router;