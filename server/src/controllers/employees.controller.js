//const hello = (req,res) => res.send('hello');
const employeeController = {}

const Employee = require('../models/Employee');

//GET
employeeController.getEmployees = async (req,res) => {
    const employees = await Employee.find();
    res.json(employees);
}

employeeController.getEmployee = async (req,res) => {
    //Employee.findOne({_id: req.params.id})
    const employee = await Employee.findById(req.params.id);
    res.send(employee);
}

//POST
employeeController.createEmployee = async (req,res) => {
    const newEmployee = new Employee(req.body);
    //console.log(newEmployee);
    await newEmployee.save();
    res.send({ message: "Employee created" });
}

//PUT
employeeController.updateEmployee = async (req,res) => {
    await Employee.findByIdAndUpdate(req.params.id, req.body);
    res.json({status: "Employee updated"});
}

//DELETE
employeeController.deleteEmployee = async (req,res) => {
    await Employee.findByIdAndDelete(req.params.id)
    res.json({status: 'Employee deleted'});
}

module.exports = employeeController;