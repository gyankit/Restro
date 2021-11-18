// jshint esversion: 8
var Vendor = require('../models/vendors');
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
    //vendor Create Controller
    create: async function (req, res) {
        var vendor = new Vendor(req.body.profile);
        var login = new Login(req.body.login);
        var salt = bcrypt.genSaltSync(10);
        login.password = bcrypt.hashSync(login.password, salt);
        var session = await mongoose.startSession();
        try {
            session.startTransaction();
            var opts = { session: session };
            await vendor.save(opts);
            await login.save(opts);
            await session.commitTransaction();
            sendResponse(res, '', true);
        } catch (error) {
            await session.abortTransaction();
            sendResponse(res, error, false);
        }
    },

    //vendor Update Controller
    update: function (req, res) {
        var vendor = new Vendor(req.body);
        vendor.findByIdAndUpdate(req.params.id, vendor, function (err, data) {
            sendResponse(res, err, data);
        });
    },

    //vendor Delete Controller
    delete: function (req, res) {
        Vendor.findByIdAndDelete(req.params.id, function (err, data) {
            sendResponse(res, err, data);
        });
    },

    find: function (req, res) {
        switch (req.body.req) {
            case 'all':
                Vendor.find({}, function (err, data) {
                    sendResponse(res, err, data);
                });
                break;
            case 'id':
                Vendor.findById(req.body.value.id, function (err, data) {
                    sendResponse(res, err, data);
                });
                break;
            case 'value':
                Vendor.find(req.body.value, function (err, data) {
                    sendResponse(res, err, data);
                });
                break;
            default:
                err = { 'error': 'Wrong Request' };
                sendResponse(res, err, '');
        }
    },

    //vendor Delete All Controller
    // deleteAll: function (res) {
    //     Vendor.deleteMany({}, function (err, data) {
    //         sendResponse(res, err, data);
    //     });
    // }
};