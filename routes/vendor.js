var express = require('express');
var router = express.Router();

var vendor = require('../controllers/vendor');

//vendor Routes
router.post('', vendor.find);
router.post('/create', vendor.create);
router.put('/update', vendor.update);
router.delete('/delete', vendor.delete);

module.exports = router;