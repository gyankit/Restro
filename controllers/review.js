var Review = require('../models/ratingReviews');
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
    //Review Create Controller
    create: function (req, res, next) {
        var review = new Review(req.body);
        Customer.findById(req.params.customers, function (err, cdata) {
            if (err) {
                sendResponse(res, err, cdata);
            } else {
                Menu.findById(req.params.menus, function (err, mdata) {
                    if (err) {
                        sendResponse(res, err, mdata);
                    } else {
                        if (req.body.shops == mdata.shops) {
                            review.save(function (err, data) {
                                sendResponse(res, err, data);
                            });
                        } else {
                            res.status(400).send({ "error": "Shop id of review not matching with Shop id of menu." });
                        }
                    }
                });
            }
        });
    },

    //Review Update Controller
    update: function (req, res, next) {
        var review = new Review(req.body);
        Review.findByIdAndUpdate(req.params.id, review, function (err, data) {
            sendResponse(res, err, data);
        });
    },

    //Review Delete Controller
    delete: function (req, res, next) {
        Review.findByIdAndDelete(req.params.id, function (err, data) {
            sendResponse(res, err, data);
        });
    },

    //Review Find All Controller
    findAll: function (req, res, next) {
        Review.find({}, function (err, data) {
            sendResponse(res, err, data);
        });
    },

    //Review Find By Id Controller
    findById: function (req, res, next) {
        Review.findById(req.params.id, function (err, data) {
            sendResponse(res, err, data);
        });
    },

    //Review Find by any value Controller
    findByValue: function (req, res, next) {
        Review.find(req.body, function (err, data) {
            sendResponse(res, err, data);
        });
    },

    //Review Delete All Controller
    deleteAll: function (req, res, next) {
        Review.deleteMany({}, function (err, data) {
            sendResponse(res, err, data);
        });
    },
};
