const {Router} = require('express');
const UsersProjectController = require('../controllers/usersProjectController');
const {body,check} = require('express-validator');
const validateRequest = require('../middlewares/request_validator');

const router = Router();

router.get('/users/:id',
    UsersProjectController.getUsersByProject);// http://localhost:8080/api/userProject/users/:id

router.get('/projects/:id',
    UsersProjectController.getProjectsByUser);  //http://localhost:8080/api/userProject/projects/:id

router.delete('/', UsersProjectController.removeUserFromProject);

router.post('/',[
    validateRequest,
],
UsersProjectController.addUser); //http://localhost:8080/api/userProject/ 

module.exports = router;