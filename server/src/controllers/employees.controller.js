//const hello = (req,res) => res.send('hello');
const employeeController = {}

employeeController.getEmployees = (req,res) => {
    res.send('get employees');
}

employeeController.getEmployee = (req,res) => {
    res.send('get employee');
}

employeeController.createEmployee = (req,res) => {
    res.send('create employee');
}

employeeController.updateEmployee = (req,res) => {
    res.send('update employee');
}

employeeController.deleteEmployee = (req,res) => {
    res.send('delete employee');
}

module.exports = employeeController;