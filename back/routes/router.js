const express = require('express');
const router = express.Router();

const {
  emailValid,
  passwordValid,
  userValid,
  secretValid
} = require("../middleware/middle");

const {
  register,
  login,
  getData,
  updateBox
} = require('../controllers/mainController');

router.post('/register', emailValid, passwordValid, userValid, register);
router.post('/login', login);
router.get('/data/:secret', secretValid, getData);
router.post('/update', secretValid, updateBox);

module.exports = router; 