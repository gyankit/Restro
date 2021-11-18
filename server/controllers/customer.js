// jshint esversion: 8
var Customer = require('../models/customers');
var Login = require('../models/login');

var mongoose = require('mongoose');

var bcrypt = require('bcrypt');

//Function to send JSON response
function sendResponse(res, err, data) {
    if (err) {
        res.status(400).send(err);
    } else {
        res.status(200).json(data);
    }
}

module.exports = {
    //Customer Create Controller
    create: async function (req, res) {
        var customer = new Customer(req.body.profile);
        var login = new Login(req.body.login);
        var salt = bcrypt.genSaltSync(10);
        login.password = bcrypt.hashSync(login.password, salt);
        var session = await mongoose.startSession();
        try {
            session.startTransaction();
            var opts = { session: session };
            await customer.save(opts);
            await login.save(opts);
            await session.commitTransaction();
            sendResponse(res, '', true);
        } catch (error) {
            await session.abortTransaction();
            sendResponse(res, error, false);
        }
    },

    //Customer Update Controller
    update: function (req, res, next) {
        var customer = new Customer(req.body);
        Customer.findByIdAndUpdate(req.params.id, customer, function (err, data) {
            sendResponse(res, err, data);
        });
    },

    //Customer Delete Controller
    delete: function (req, res, next) {
        Customer.findByIdAndDelete(req.params.id, function (err, data) {
            sendResponse(res, err, data);
        });
    },

    //Customer Find All Controller
    findAll: function (req, res, next) {
        Customer.find({}, function (err, data) {
            sendResponse(res, err, data);
        });
    },

    //Customer Find By Id Controller
    findById: function (req, res, next) {
        Customer.findById(req.params.id, function (err, data) {
            sendResponse(res, err, data);
        });
    },

    //Customer Find by any value Controller
    findByValue: function (req, res, next) {
        Customer.find(req.body, function (err, data) {
            sendResponse(res, err, data);
        });
    },

    //Customer Delete All Controller
    deleteAll: function (req, res, next) {
        Customer.deleteMany({}, function (err, data) {
            sendResponse(res, err, data);
        });
    },
};
