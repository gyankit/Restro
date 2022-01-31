const Menu = require('../models/menu.model');
const Vendor = require('../models/vendor.model');
const file = require('./file.controller');
const { er, sr } = require('../helper/response');

module.exports = {
    //Menu Create Controller
    create: async (req, res) => {
        try {
            if (!req.isAuth) throw new Error(401);
            if (req._type !== 2) throw new Error(401);
            const menu = new Menu(req.body);
            const vendor = await Vendor.findById(menu.vid);
            if (vendor === null) throw new Error('Bad Request');
            const data = await menu.save();
            sr(res, data);
        } catch (err) {
            er(res, err);
        }
    },

    //Menu Update Controller
    update: async (req, res) => {
        try {
            if (!req.isAuth) throw new Error(401);
            if (req._type !== 2) throw new Error(401);
            const menu = new Menu(req.body);
            const data = await Menu.findByIdAndUpdate(req.body._id, menu, { new: true });
            sr(res, data);
        } catch (err) {
            er(res, err);
        }
    },

    //Menu Delete Controller
    delete: async (req, res) => {
        try {
            if (!req.isAuth) throw new Error(401);
            if (req._type !== 2) throw new Error(401);
            const data = await Menu.findByIdAndDelete(req.params.id);
            await file.remove(data.photo);
            sr(res, true);
        } catch (err) {
            er(res, err);
        }
    },

    state: async (req, res) => {
        try {
            if (!req.isAuth) throw new Error(401);
            let menu = await Menu.findById(req.body.id);
            switch (req._type) {
                case 0:
                    menu.varified = !menu.varified;
                    break;
                case 2:
                    menu.active = !menu.active;
                    break;
                default:
                    throw new Error(400);
            }
            await Menu.findByIdAndUpdate(req.body.id, menu);
            sr(res, menu);
        } catch (err) {
            er(res, err);
        }
    },

    find: async (req, res) => {
        try {
            let data;
            switch (req._type) {
                case 0:
                    data = await Menu.find({});
                    break;
                case 1:
                    data = await Menu.find({ vid: req._id, del: false });
                    break;
                default:
                    if (req.body.req) {
                        data = await Menu.findById(req.body.id);
                    } else {
                        data = await Menu.find({ active: true, varified: true, del: false });
                    }
                    break;
            }
            sr(res, data);
        } catch (err) {
            er(res, err);
        }
    },

};
