
const Categories = require('../models/categories.models');
const Users = require('../models/users.models');


class UsersService {
static async create(newUser) {
    try {
        const userCreated = await Users.create(newUser);
        return userCreated;
        
    } catch (error) {
        throw error;
    }
}

static async geTodosByUserId(id){
    try {
        const todoByUserId = await Users.findByPk(id, {
            attributes: ["id", "username"],
            include: [{
                model: Todos,
                attributes: [ "id", "title", "description" ],
                include: {
                    model: Categories,
                    attributes: ["name"]
                }
            },
        ]}
        );  
        return todoByUserId;     
            
    } catch (error) {
        throw error;
    }
}

}

module.exports = UsersService;