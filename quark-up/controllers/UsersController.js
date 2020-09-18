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
        try{
            const { page = 1 } = req.query;
            const info = await Users.paginate({},{ page, limit: 10 });
            return res.json(info);
        }
        catch (error) {
            // response error
            console.log("Ocorreu um erro, sua conexão não foi realizada!");
        }		
    },

    // CRUD
    // Get Function
    async show(req, res) {
        // Consulta
        try{
            const queryUsers = await Users.find();

            return res.json(queryUsers);
        }
        catch (error) {
            // response error
            console.log("Ocorreu um erro, sua conexão não foi realizada!");
        }        
    },
   
    // Get Function
    async showUser(req, res) {
        // Consulta
        try{
            const queryUser = await Users.findById(req.params.id);

            return res.json(queryUser);
        }
        catch (error) {
            // response error
            console.log("Ocorreu um erro, sua conexão não foi realizada!");
        }        
    },

    // Post Function
    async registerUser(req,res) {
        // Registro
        try{
            const regUsers = await Users.create(req.body);

            return res.json(regUsers);
        }
        catch (error) {
            // response error
            console.log("Ocorreu um erro, sua conexão não foi realizada!");
        }        
    },

    // Put Function
    async updateUser(req,res) {
        // Update
        try{
            const upUsers = await Users.findByIdAndUpdate(req.params.id, req.body,
            { new: true });

            return res.json(upUsers);
        }
        catch (error) {
            // response error
            console.log("Ocorreu um erro, sua conexão não foi realizada!");
        }        
    },

    // Delete Function
    async destroyUser(req,res) {
        // Delete
        try{
            await deleteUsers.findByIdAndRemove(req.params.id);

            return res.send();
        }
        catch (error) {
            // response error
            console.log("Ocorreu um erro, sua conexão não foi realizada!");
        }        
    }
};