const { Router } = require('express');
const authController = require('../controllers/authController');
const { check } = require('express-validator');
const validateRequest = require('../middlewares/request_validator');

const router = Router();

// Lo que necesito cargar para el register
router.post('/register', [
  check('nombre').not().isEmpty(),
  check('email').isEmail(),
  check('contrasenia').isLength({ min: 2 }),
  validateRequest,  // validamos desde el middleware
], authController.register); // http://localhost:8080/api/login/register - POST PARA EL REGISTER

// Lo que necesito cargar para el login
router.post('/signin', [
  check('email').isEmail(),
  check('contrasenia').not().isEmpty(),
  validateRequest,  // validamos desde el middleware
], authController.login); // http://localhost:8080/api/login/signin - POST PARA EL LOGIN

module.exports = router;