var express = require('express');
var router = express.Router();

var menu = require('../controllers/menu');

//Menu Routes
router.post('', menu.find);
router.post('/create', menu.create);
router.put('/update', menu.update);
router.delete('/delete', menu.delete);

module.exports = router;