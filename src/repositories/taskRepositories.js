const Task = require('../models/Task');

const createTaskDb = async (task) => {
  try {
    const taskdb = new Task(task);
    await taskdb.save();
  } catch (error) {
    throw error;
  }
};

const getTasksDb = async (id_project) => {
  try {
    const tasks = await Task.find({ id_project });
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

const changeStateTaskDb = async (id, taskUpdated) => {
  try {
    const task = await Task.findOneAndUpdate({ _id: id }, taskUpdated, {
      new: true,
    });
    return task;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  createTaskDb,
  getTasksDb,
  deleteTaskDb,
  changeStateTaskDb,
};
