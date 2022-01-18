var express = require('express');
var router = express.Router();

var country = require('../controllers/country');
var upload = require('../controllers/upload');


router.get('', function (req, res) {
    res.status(200).json({
        message: 'Watero Web Api Connected',
    });
});

//Country State City Routes
router.get('/country', country.find);
router.post('/country', country.find);
router.get('/country/create', country.create);
router.post('/upload', upload.one)
router.post('/uploads', upload.many)

module.exports = router;