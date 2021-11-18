var Order = require('../models/orders');
var Menu = require('../models/menus');
var Customer = require('../models/customers');

//Function to send JSON response
function sendResponse(res, err, data) {
    if (err) {
        res.status(400).send(err);
    } else {
        res.status(200).json(data);
    }
}

module.exports = {
    //Order Create Controller
    create: function (req, res, next) {
        var order = new Order(req.body);
        Customer.findById(req.params.customers, function (err, cdata) {
            if (err) {
                sendResponse(res, err, cdata);
            } else {
                Menu.findById(req.params.menus, function (err, mdata) {
                    if (err) {
                        sendResponse(res, err, mdata);
                    } else {
                        if (req.body.shops == mdata.shops) {
                            order.save(function (err, data) {
                                sendResponse(res, err, data);
                            });
                        } else {
                            res.status(400).send({ "error": "Shop id of order not matching with Shop id of menu." });
                        }
                    }
                });
            }
        });
    },

    //Order Update Controller
    update: function (req, res, next) {
        var order = new Order(req.body);
        Order.findByIdAndUpdate(req.params.id, order, function (err, data) {
            sendResponse(res, err, data);
        });
    },

    //Order Delete Controller
    delete: function (req, res, next) {
        Order.findByIdAndDelete(req.params.id, function (err, data) {
            sendResponse(res, err, data);
        });
    },

    //Order Find All Controller
    findAll: function (req, res, next) {
        Order.find({}, function (err, data) {
            sendResponse(res, err, data);
        });
    },

    //Order Find By Id Controller
    findById: function (req, res, next) {
        Order.findById(req.params.id, function (err, data) {
            sendResponse(res, err, data);
        });
    },

    //Order Find by any value Controller
    findByValue: function (req, res, next) {
        Order.find(req.body, function (err, data) {
            sendResponse(res, err, data);
        });
    },

    //Order Delete All Controller
    deleteAll: function (req, res, next) {
        Order.deleteMany({}, function (err, data) {
            sendResponse(res, err, data);
        });
    },
};
