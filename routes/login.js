var express = require('express');
var router = express.Router();
var bcrypt = require('bcrypt');
var login = require('../models/login');


//Login Routes
router.post('', function (req, res) {
    login.findOne({ email: req.body.email, type: req.body.type, active: true }, function (err, data) {
        if (err) {
            res.status(400).send(err);
        } else {
            if (data === null) {
                res.status(400).send(false);
            } else {
                bcrypt.compare(req.body.password, data.password, function (err, result) {
                    if (err) {
                        res.status(400).send(err);
                    } else if (result) {
                        res.status(200).json(data.lid);
                    } else {
                        res.status(400).send(false);
                    }
                });
            }
        }
    });
});

module.exports = router;