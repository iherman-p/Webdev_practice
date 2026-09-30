const express = require('express');
const sessionController = require('../../contollers/sessionController');

const   router = express.Router();

router.post('/', sessionController.openSession);

module.exports = router;
