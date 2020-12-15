import express from 'express'

const router = require('express').Router();
require('dotenv').config();
let Employee = require('../models/employee.model')
router.use(express.json());
router.use(express.urlencoded({ extended: true }));

// get all employees
router.route('/').get((req, res) => {
  Employee.find().then(employees => res.json(employees).status(200))
  .catch(err => res.status(400).json('Error: ' + err))
});

//get a single employee by id
router.route('/:id').get((req, res) => {
	Employee.findById(req.params.id)
	.then(employee => res.json(employee))
	.catch(err => res.status(400).json('Error: ' + err))
});
//create new employee
router.route('/add').post((req, res) => {
  const employee = {
    name: req.body.name,
    dateOfBirth: Date.parse(req.body.dateOfBirth) ,
    gender: req.body.gender,
    salary: req.body.salary
  }
  const newEmployee = new Employee(employee);
  newEmployee.save()
  .then(() => res.json('employee added successfully').status(201))
  .catch(err => res.status(400).json('Error: ' + err));
})
//update existing employee
router.route('/:id').patch((req, res) =>{
	Employee.findById(req.params.id)
	.then(employee => {
		employee.name = req.body.name;
		employee.dateOfBirth = req.body.dateOfBirth;
		employee.gender = req.body.gender;
		employee.salary = req.body.salary;

		employee.save()
		.then(() => res.json('employee updated successfully').status(200))
		.catch(err => res.status(400).json('Error: ' + err))
	})
})
//delete existing
router.route('/:id').delete((req, res) => {
	Employee.findByIdAndDelete(req.params.id)
	.then(() => res.json('employee deleted'))
	.catch(err => res.status(400).json('Error: ' + err))
});

module.exports = router;
