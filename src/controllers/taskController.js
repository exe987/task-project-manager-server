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
  let data = await req.params;
  const { id } = data;

  try {
    const tasks = await taskRepo.getTasksDb(id);

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

const changeStateTask = async (req, res) => {
  let errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  let data = await req.body;

  let task = {};

  task.name = data.name;
  task.id_project = data.id_project;
  task.done = !data.done;

  try {
    const taskUpdated = await taskRepo.changeStateTaskDb(data._id, task);

    res.status(200).json({ taskUpdated });
  } catch (err) {
    console.log(err);
    return res.status(500);
  }
};

module.exports = {
  createTask,
  getTasks,
  deleteTask,
  changeStateTask,
};
