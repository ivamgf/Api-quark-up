// Model Users

// Imports

// Imports Modules

// Imports components

// Variables

// Const
const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const UsersSchema = new mongoose.Schema({
	id: {
		type: String,
        required: true,
	},
	name: {
		type: String,
        required: true,
	},
	contacts: [{
		telephone: {
            type: String,
            required: false,
        },
        email: {
            type: String,
            required: false,
        },
        whats: {
            type: String,
            required: false,
        },
    }],
	balance: {
		type: mongoose.Decimal128,
        required: false,
	}
});

// Functions
UsersSchema.plugin(mongoosePaginate);

// Exports
mongoose.model('UsersModel', UsersSchema);