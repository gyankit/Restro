const Order = require('../models/order.model');
const Menu = require('../models/menu.model');
const Customer = require('../models/customer.model');
const { er, sr } = require('../helper/response');

module.exports = {
    //Order Create Controller
    create: async (req, res) => {
        try {
            if (!req.isAuth) throw new Error(401);
            if (req._type !== 2) throw new Error(401);
            const order = new Order(req.body);
            const data = await order.save();
            sr(res, data);
        } catch (error) {
            console.log(error);
            er(res, error);
        }
    },

    //Order Update Controller
    update: async (req, res) => {
        try {
            if (!req.isAuth) throw new Error(401);
            let order;
            switch (req._type) {
                case 0:
                    order = await Order.findByIdAndUpdate(req.params.id, order);
                    break;
                case 1:
                    order = await Order.findByIdAndUpdate(req.body.id, { status: req.body.status }, { new: true });
                    break;
                case 2:
                    order = await Order.findById(req.body.id);
                    if (order.status === 0) {
                        order.status = 1;
                        await Order.findByIdAndUpdate(req.body.id, order);
                    }
                    break;
                default:
                    throw new Error(400);
            }
            sr(res, order);
        } catch (error) {
            er(res, error);
        }
    },

    //Order Delete Controller
    delete: async (req, res) => {
        try {
            if (!req.isAuth) throw new Error(401);
            if (req._type !== 2) throw new Error(401);
            const order = await Order.findByIdAndDelete(req.params.id);
            sr(res, order);
        } catch (error) {
            er(res, error);
        }
    },

    //Order Find Controller
    find: async (req, res) => {
        try {
            if (!req.isAuth) throw new Error(401);
            let filter;
            switch (req._type) {
                case 0:
                    if (req.body.req) {
                        filter = { status: { $in: [1, 2, 4, 5, 8] } };
                    } else {
                        filter = { status: { $in: [3, 6, 7] } };
                    }
                    break;
                case 1:
                    if (req.body.req) {
                        filter = { vid: req._id, status: { $in: [1, 2, 4, 5, 8] } };
                    } else {
                        filter = { vid: req._id, status: { $in: [3, 6, 7] } };
                    }
                    break;
                case 2:
                    if (req.body.req) {
                        filter = { cid: req._id, status: 0 };
                    } else {
                        filter = { cid: req._id, status: { $ne: 0 } };
                    }
                    break;
                default:
                    throw new Error(400);
            }
            const data = await Order.find(filter).sort({ createdAt: -1 });
            sr(res, data);
        } catch (error) {
            er(res, error);
        }
    }
};
