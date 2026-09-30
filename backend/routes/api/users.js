
const express = require('express');
const userController = require('../../contollers/userContoller');

const   router = express.Router();

router.post('/signup', userController.createUser);

module.exports = router;
