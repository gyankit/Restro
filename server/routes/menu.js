var express = require('express');
var router = express.Router();


var menu = require('../controllers/menu');

//Redirect Routes
router.get('/menu', function (req, res) { res.redirect('/web/api'); });

//Menu Routes
router.get('/menu/find', menu.findAll);
router.get('/menu/find/{id}', menu.findById);
router.post('/menu/find', menu.findByValue);
router.post('/menu/create', menu.create);
router.put('/menu/update/{id}', menu.update);
router.delete('/menu/delete/{id}', menu.delete);
router.delete('/menu/delete', menu.deleteAll);

module.exports = router;