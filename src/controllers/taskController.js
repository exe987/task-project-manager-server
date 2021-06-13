const taskRepo = require('../repositories/taskRepositories');
const { validationResult } = require('express-validator');

const createTask = async (req, res) => {
  let errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  let task = await req.body;
  try {
    await taskRepo.createTaskDb(task);
    res.status(200).json({ msg: 'Task created' });
  } catch (err) {
    console.log(err);
    return res.status(500);
  }
};

const getTasks = async (req, res) => {
  let errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const tasks = await taskRepo.getTasksDb();
    res.status(200).json({ tasks });
  } catch (err) {
    console.log(err);
    return res.status(500);
  }
};

const deleteTask = async (req, res) => {
  let errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  let data = await req.params;
  const { id } = data;
  try {
    await taskRepo.deleteTaskDb(id);
    res.status(200).json({ msg: 'Task deleted' });
  } catch (err) {
    console.log(err);
    return res.status(500);
  }
};

module.exports = {
  createTask,
  getTasks,
  deleteTask,
};
