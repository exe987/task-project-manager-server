const { Router } = require('express');
const router = Router();
const { check } = require('express-validator');
const projectControllers = require('../controllers/projectController');
const taskControllers = require('../controllers/taskController');

const validateProject = [check('name', 'Name must be 6 characters at least').isLength({ min: 6 })];
const validateTask = [
  check('name', 'Name must be 6 characters at least').isLength({ min: 6 }),
  check('description', 'Description must be 15 characters at least').isLength({ min: 15 }),
];

router.post('/projects', validateProject, projectControllers.createProject);
router.get('/projects', projectControllers.getProjects);
router.delete('/projects/:id', projectControllers.deleteProject);

router.post('/tasks', validateTask, taskControllers.createTask);
router.get('/tasks');
router.put('/tasks/:id');
router.delete('/tasks/:id');

module.exports = router;
