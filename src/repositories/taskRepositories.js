const Task = require('../models/Task');

const createTaskDb = async (task) => {
  try {
    const taskdb = new Task(task);
    await taskdb.save();
  } catch (error) {
    throw error;
  }
};

const getTasksDb = async () => {
  try {
    const tasks = await Task.find();
    return tasks;
  } catch (error) {
    throw error;
  }
};

const deleteTaskDb = async (id) => {
  try {
    await Task.findByIdAndDelete(id);
  } catch (error) {
    throw error;
  }
};

module.exports = {
  createTaskDb,
  getTasksDb,
  deleteTaskDb,
};
