var Menu = require('../models/menus');
var vendor = require('../models/vendors');

//Function to send JSON response
function sendResponse(res, err, data) {
    if (err) {
        res.status(400).json(err);
    } else {
        res.status(200).json(data);
    }
}

module.exports = {
    //Menu Create Controller
    create: function (req, res, next) {
        var menu = new Menu(req.body);
        Shop.findById(menu.shops, function (err, data) {
            if (!err) {
                menu.save(function (err, data) {
                    sendResponse(res, err, data);
                });
            } else {
                sendResponse(res, err, data);
            }
        });
    },

    //Menu Update Controller
    update: function (req, res, next) {
        var menu = new Menu(req.body);
        Menu.findByIdAndUpdate(req.params.id, menu, function (err, data) {
            sendResponse(res, err, data);
        });
    },

    //Menu Delete Controller
    delete: function (req, res, next) {
        Menu.findByIdAndDelete(req.params.id, function (err, data) {
            sendResponse(res, err, data);
        });
    },

    //Menu Find All Controller
    findAll: function (req, res, next) {
        Menu.find({}, function (err, data) {
            sendResponse(res, err, data);
        });
    },

    //Menu Find By Id Controller
    findById: function (req, res, next) {
        Menu.findById(req.params.id, function (err, data) {
            sendResponse(res, err, data);
        });
    },

    //Menu Find by any value Controller
    findByValue: function (req, res, next) {
        Menu.find(req.body, function (err, data) {
            sendResponse(res, err, data);
        });
    },

    //Menu Delete All Controller
    deleteAll: function (req, res, next) {
        Menu.deleteMany({}, function (err, data) {
            sendResponse(res, err, data);
        });
    },
};
