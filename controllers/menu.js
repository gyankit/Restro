var Menu = require('../models/menus');
var Vendor = require('../models/vendors');

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
    create: function (req, res) {
        var menu = new Menu(req.body);
        Vendor.findOne({ "vid": menu.vid }, function (err, data) {
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
    update: function (req, res) {
        var menu = new Menu(req.body);
        Menu.findByIdAndUpdate(req.params.id, menu, function (err, data) {
            sendResponse(res, err, data);
        });
    },

    //Menu Delete Controller
    delete: function (req, res) {
        Menu.findByIdAndDelete(req.params.id, function (err, data) {
            sendResponse(res, err, data);
        });
    },

    //Menu Find All Controller
    find: function (req, res) {
        switch (req.body.req) {
            case 'all':
                Menu.find({}, function (err, data) {
                    sendResponse(res, err, data);
                });
                break;
            case 'val':
                Menu.find(req.body.val, function (err, data) {
                    sendResponse(res, err, data);
                });
                break;
            default:
                sendResponse(res, { 'error': 'Wrong Request' }, '');
        }
    },

};
