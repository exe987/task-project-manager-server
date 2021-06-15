const Project = require('../models/Project');

const createProjectDb = async (project) => {
  try {
    const projectdb = new Project(project);
    await projectdb.save();
    return projectdb._id
  } catch (error) {
    throw error;
  }
};

const getProjectsDb = async () => {
  try {
    const projects = await Project.find();
    return projects;
  } catch (error) {
    throw error;
  }
};

const deleteProjectDb = async (id) => {
  try {
    await Project.findByIdAndDelete(id);
  } catch (error) {
    throw error;
  }
};

module.exports = {
  createProjectDb,
  getProjectsDb,
  deleteProjectDb,
};
