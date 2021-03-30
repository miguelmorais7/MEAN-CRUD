//const hello = (req,res) => res.send('hello');
const employeeController = {}

const Employee = require('../models/Employee');

employeeController.getEmployees = async (req,res) => {
    const employees = await Employee.find()
    res.json(employees)
}

employeeController.getEmployee = (req,res) => {
    res.send('get employee');
}

employeeController.createEmployee = async (req,res) => {
    const newEmployee = new Employee(req.body);
    await newEmployee.save()
    res.send({ message: "Employee created" });
}

employeeController.updateEmployee = (req,res) => {
    res.send('update employee');
}

employeeController.deleteEmployee = (req,res) => {
    res.send('delete employee');
}

module.exports = employeeController;