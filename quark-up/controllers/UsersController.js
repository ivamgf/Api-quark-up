// UsersController file

// Imports

// Imports Modules

// Imports components

// Variables

// Constant
const mongoose = require('mongoose');
const Users = mongoose.model('UsersModel');
// Functions

// Exports
module.exports = {
    // Function Index
    
	async index(req, res) {
		const { page = 1 } = req.query;
	const info = await Users.paginate({}, { page, limit: 10 });

	return res.json(info);
    },

    // CRUD
    // Get Function
    async show(req, res) {
        // Consulta
        const queryUsers = await Users.find();

        return res.json(queryUsers);
    },
   
    // Get Function
    async showUser(req, res) {
        // Consulta
        const queryUser = await Users.findById(req.params.id);

        return res.json(queryUser);
    },

    // Post Function
    async registerUser(req,res) {
        // Registro
        const regUsers = await Users.create(req.body);

        return res.json(regUsers);
    },

    // Put Function
    async updateUser(req,res) {
        // Update
        const upUsers = await Users.findByIdAndUpdate(req.params.id, req.body,
    { new: true });

        return res.json(upUsers);
    },

    // Delete Function
    async destroyUser(req,res) {
        // Delete
        await deleteUsers.findByIdAndRemove(req.params.id);

        return res.send();
    }

};