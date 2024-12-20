const UsersProject = require('../services/usersProjectService');

const getUsersByProject = async (req,res) => {
  const {
    id
    } = req.params;
    try { 
      const usersProject = await UsersProject.getUsersByProject(Number(id));
      res.status(200).json(usersProject);
    } catch (err) {
      res.status(500).json({
        message: err.message
    });
    }
  };

  const getProjectsByUser = async (req,res) => {
    const {
      id
    } = req.params;
    try {
      const projects = await UsersProject.getProjectsByUser(Number(id));
      res.status(200).json(projects);
    } catch (err) {
      res.status(500).json({
        message: err.message
      });
    }
  };

  const removeUserFromProject = async (req,res) => {
    try {
      const projects = await UsersProject.removeUserFromProyect(req.body.id, req.body.id);
      res.status(200).json(projects);
    } catch (err) {
      res.status(500).json({
        message: err.message
      });
    }
  };

  const addUser = async(req,res) => {
      try {
        const project = await UsersProject.addUser(req.body);
        res.status(200).json(project);
    } catch (err) {
        res.status(500).json({
            message: err.message
        });
    }
  }

  module.exports = {
    getUsersByProject,
    getProjectsByUser,
    addUser,
    removeUserFromProject
};