const Todos = require('../models/todos.models');
const Users = require('../models/users.models');
const Categories = require('../models/categories.models');

class TodosService {  // relacionado con el middelware para la creacion de tareas
    static async create(newTodo){
        try {
          const todoCreated = await Todos.create(newTodo);  
          return todoCreated;
        } catch (error) {
          throw error;  
        }
}

static async getTodosUser(todoId) { // relacionado con el middelware para consultar tareas por Id del Usuario que la creo
    try {
        const TodosUser = await Todos.findByPk(todoId, {
            attributes: [ "title", "description", "completed", "categories_id" ],
            include: [{
                model: Users,
                attributes: ["username"]
            }, 
            {
model: Categories,
attributes: ["name"]
            }
        ]
        });
        return TodosUser;

    } catch (error) {
        throw error;
    }
}

static async Update(id, UpdateTodo){ // middelware para actualizar tareas por ID
    try {
        const todoUpdate = await Todos.update(UpdateTodo, {
            where: {id}
        });
        return todoUpdate;
    } catch (error) {
        throw error;
    }
}

static async delete(id){
    try{
        const todoDelete = await Todos.destroy({
            where: {id}
        });
        return todoDelete;
    } catch (error) {
        throw error;
    }
}
static async deleteCategories(id){
    try{
        const categoryDelete = await Categories.destroy({
            where: {id}
        });
        return categoryDelete;
    } catch (error) {
        throw error;
    }
}

};

module.exports = TodosService;