var express = require('express');
var router = express.Router();

var login = require('../controllers/login');

//Login Routes
router.post('/login', login.user);
router.post('/login/vendor', login.admin);

module.exports = router;