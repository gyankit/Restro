var Shop = require('../models/logins');
var Customer = require('../models/loginCustomer');

//Function to send JSON response
function sendResponse(res, err, data) {
    if (err) {
        res.status(400).send(err);
    } else {
        if (data.length == 0) {
            res.status(400).json({
                'error': 'No data Found',
                'code': 403
            });
        } else {
            res.status(200).json(data);
        }
    }
}

module.exports = {
    admin: function (req, res, next) {
        Shop.findOne(req.body, function (err, data) {
            sendResponse(res, err, data);
        });
    },

    user: function (req, res, next) {
        Customer.findOne(req.body, function (err, data) {
            sendResponse(res, err, data);
        });
    }
};