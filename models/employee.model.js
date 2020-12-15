const mongoose = require('mongoose')
const schema = mongoose.Schema

const employeeSchema = new schema({
	name: {
		type: String,
		required: true,
		trim: true
	},
	dateOfBirth: {
		type: Date,
		required: true
	},
	gender: {
		type: String,
		required: true
	},
	salary: {
		type: Number,
		required: true
	},
	},
	{timestamps: true}
);

const Employee = mongoose.model('Employee', employeeSchema);
 module.exports = Employee