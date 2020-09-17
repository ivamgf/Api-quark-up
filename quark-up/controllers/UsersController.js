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
    /*
	async index(req, res) {
		const { page = 1 } = req.query;
	const users = await Users.paginate({}, { page, limit: 10 });

	return res.json(users);
    },
*/
    // CRUD
/*
    // Get Function
    async show(req, res) {
        // Consulta
        const users = await Users.findById(req.body);

        return res.json(users);
    },
*/
/*    
    // Get Function
    async show(req, res) {
        // Consulta
        const queryUsers = await Users.findById(req.params.id);

        return res.json(queryUsers);
    },
*/   
/*
    // Post Function
    async store(req,res) {
        // Registro
        const users = await Users.create(req.body);

        return res.json(users);
    },
*/
/*
    // Put Function
    async update(req,res) {
        // Update
        const users = await Users.findByIdAndUpdate(req.params.id, req.body,
    { new: true });

        return res.json(Users);
    },
*/
/*
    // Delete Function
    async destroy(req,res) {
        // Delete
        await Users.findByIdAndRemove(req.params.id);

        return res.send();
    }
*/
};