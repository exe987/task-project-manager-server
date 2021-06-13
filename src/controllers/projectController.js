const projectRepo = require('../repositories/projectRepositories');
const { validationResult } = require('express-validator');

const createProject = async (req, res) => {
  let errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  let project = await req.body;
  try {
    await projectRepo.createProjectDb(project);
    res.status(200).json({ msg: 'Project created' });
  } catch (err) {
    console.log(err);
    return res.status(500);
  }
};

const getProjects = async (req, res) => {
  let errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const projects = await projectRepo.getProjectsDb();
    res.status(200).json({ projects });
  } catch (err) {
    console.log(err);
    return res.status(500);
  }
};

const deleteProject = async (req, res) => {
  let errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  let data = await req.params;
  const { id } = data;
  try {
    await projectRepo.deleteProjectDb(id);
    res.status(200).json({ msg: 'Project deleted' });
  } catch (err) {
    console.log(err);
    return res.status(500);
  }
};

module.exports = {
  createProject,
  deleteProject,
  getProjects,
};
