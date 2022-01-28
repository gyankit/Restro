const express = require('express');
const router = express.Router();

const country = require('../controllers/country.controller');
const vendor = require('../controllers/vendor.controller');
const auth = require('../controllers/auth.controller');
const menu = require('../controllers/menu.controller');
const file = require('../controllers/file.controller');
// const customer = require('../controllers/customer.controller');
const order = require('../controllers/order.controller');
// const review = require('../controllers/review.controller');


router.get('', (req, res) => {
    res.status(200).json({
        message: 'Restro Web Api Connected',
    });
});

//Country State City Routes
router.get('/country', country.find);
router.post('/country', country.find);
router.get('/country/create', country.create);

//Upload Routes
router.post('/upload', file.upload);
router.post('/remove', file.remove);

//Auth Routes
router.post('/login', auth.login);
router.post('/register', auth.register);

//Vendor Routes
router.post('/vendor', vendor.find);
router.put('/vendor/update', vendor.update);
router.delete('/vendor/delete/:id', vendor.delete);

//Menu Routes
router.post('/menu', menu.find);
router.post('/menu/create', menu.create);
router.post('/menu/state', menu.state);
router.put('/menu/update', menu.update);
router.delete('/menu/delete/:id', menu.delete);

//Customer Routes
// router.post('', customer.find);
// router.put('/update', customer.update);
// router.delete('/delete', customer.delete);


// Order Routes
router.post('/order/state', order.state);
router.post('/order', order.find);
router.post('/order/create', order.create);
router.put('/order/update', order.update);
router.delete('/order/delete/{id}', order.delete);

// Review Routes
// router.get('/review/find', review.findAll);
// router.get('/review/find/{id}', review.findById);
// router.post('/review/find', review.findByValue);
// router.post('/review/create', review.create);
// router.put('/review/update/{id}', review.update);
// router.delete('/review/delete/{id}', review.delete);

module.exports = router;