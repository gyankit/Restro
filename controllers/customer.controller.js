const Customer = require('../models/customer.model');
const { er, sr } = require('../helper/response');

module.exports = {
    //Customer Update Controller
    update: async (req, res) => {
        try {
            if (!req.isAuth) throw new Error(401);
            if (req._type !== 1) throw new Error(401);
            const customer = new Customer(req.body);
            const data = await Customer.findByIdAndUpdate(req.params.id, customer);
            sr(res, data);
        } catch (error) {
            er(res, error);
        }
    },

    //Customer Delete Controller
    delete: async (req, res) => {
        try {
            if (!req.isAuth) throw new Error(401);
            if (req._type !== 0 || req._type !== 1) throw new Error(401);
            await Customer.findByIdAndDelete(req.params.id);
            sr(res, true);
        } catch (error) {
            er(res, error);
        }
    },

    //Customer Find Controller
    find: async (req, res) => {
        try {
            if (!req.isAuth) throw new Error(401);
            let data;
            switch (req._type) {
                case 0:
                    data = await Customer.find({});
                    break;
                case 1:
                    data = await Customer.findById(req._id);
                    break;
                default:
                    throw new Error(400);
            }
            sr(res, data);
        } catch (error) {
            er(res, error);
        }
    }
};
