const Order = require('../models/order.model');
const Menu = require('../models/menu.model');
const Customer = require('../models/customer.model');
const { er, sr } = require('../helper/response');

module.exports = {
    //Order Create Controller
    create: async (req, res) => {
        try {
            if (!req.isAuth) throw new Error(401);
            if (req._type !== 1) throw new Error(401);
            const order = new Order(req.body);
            const customer = await Customer.findById(req.params.customer);
            const menu = await Menu.findById(req.params.menu);
            if (customer === null || menu === null) throw new Error('Bad Request');
            if (req.body.shop === menu.shop) throw new Error("Shop id of order not matching with Shop id of menu.");
            const data = await order.save();
            sr(res, data);
        } catch (error) {
            er(res, error);
        }
    },

    //Order Update Controller
    update: async (req, res) => {
        try {
            if (!req.isAuth) throw new Error(401);
            if (req._type !== 1 || req._type !== 2) throw new Error(401);
            const order = new Order(req.body);
            const data = await Order.findByIdAndUpdate(req.params.id, order);
            sr(res, data);
        } catch (error) {
            er(res, error);
        }
    },

    //Order Delete Controller
    delete: async (req, res) => {
        try {
            if (!req.isAuth) throw new Error(401);
            if (req._type !== 0 || req._type !== 1 || req._type !== 2) throw new Error(401);
            await Order.findByIdAndDelete(req.params.id);
            sr(res, true);
        } catch (error) {
            er(res, error);
        }
    },

    //Order Find Controller
    find: async (req, res) => {
        try {
            if (!req.isAuth) throw new Error(401);
            let data;
            switch (req._type) {
                case 0:
                    data = await Order.find({});
                    break;
                case 1:
                    data = await Order.find({ cid: req.body.id });
                    break;
                case 2:
                    data = await Order.find({ vid: req.body.id });
                    break;
                default:
                    throw new Error(400);
            }
            sr(res, data);
        } catch (error) {
            er(res, error);
        }
    },

    state: async (req, res) => {
        try {
            if (!req.isAuth) throw new Error(401);
            if (req._type !== 0 || req._type !== 2) throw new Error(401);
            let order = await Order.findById(req.body.id);
            switch (req.body.req) {
                case 0:
                    order.varified = !order.varified;
                    break;
                case 1:
                    order.active = !order.active;
                    break;
                default:
                    throw new Error(400);
            }
            await Order.findByIdAndUpdate(req.body.id, order);
            sr(res, order);
        } catch (err) {
            er(res, err);
        }
    }
};
