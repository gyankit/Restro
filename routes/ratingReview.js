var express = require('express');
var router = express.Router();

var review = require('../controllers/review');

//review Routes
router.get('/review/find', review.findAll);
router.get('/review/find/{id}', review.findById);
router.post('/review/find', review.findByValue);
router.post('/review/create', review.create);
router.put('/review/update/{id}', review.update);
router.delete('/review/delete/{id}', review.delete);


module.exports = router;