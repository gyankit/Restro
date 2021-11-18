var express = require('express');
var router = express.Router();

var customer = require('../controllers/customer');

//customer Routes
//router.post('', customer.find);
router.post('/create', customer.create);
router.put('/update', customer.update);
router.delete('/delete', customer.delete);


module.exports = router;