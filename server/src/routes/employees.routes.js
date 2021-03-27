const { Router } = require('express');
const router = Router();

const employeesController = require('../controllers/employees.controller');

//CRUD - Create, Read, Update & Delete


router.get('/', employeesController.getEmployees);

router.post('/', employeesController.createEmployee);

router.get('/:id', employeesController.getEmployee);

router.put('/:id', employeesController.updateEmployee);

router.delete('/:id', employeesController.deleteEmployee);

module.exports = router;