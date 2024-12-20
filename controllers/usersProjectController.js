const UsersProject = require('../services/usersProjectService');

//traer miembros del proyecto
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

  //Eliminar users del proyecto
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

  //Agregar Users al proyecto
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