var express = require('express');
var router = express.Router();

var order = require('../controllers/order');

//Redirect Routes
router.get('/order', function (req, res) { res.redirect('/web/api'); });

//order Routes
router.get('/order/find', order.findAll);
router.get('/order/find/{id}', order.findById);
router.post('/order/find', order.findByValue);
router.post('/order/create', order.create);
router.put('/order/update/{id}', order.update);
router.delete('/order/delete/{id}', order.delete);

module.exports = router;