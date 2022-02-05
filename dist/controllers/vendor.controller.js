const Vendor = require('../models/vendor.model');
const { er, sr } = require('../helper/response');

module.exports = {
    //Vendor Update Controller
    update: async (req, res) => {
        try {
            if (!req.isAuth) throw new Error(401);
            if (req._type !== 0 || req._type !== 2) throw new Error(401);
            const vendor = new Vendor(req.body);
            const data = await Vendor.findByIdAndUpdate(req.params.id, vendor);
            sr(res, data);
        } catch (error) {
            er(res, error);
        }
    },

    //Vendor Delete Controller
    delete: async (req, res) => {
        try {
            if (!req.isAuth) throw new Error(401);
            if (req._type !== 1) throw new Error(401);
            await Vendor.findByIdAndDelete(req.params.id);
            sr(res, true);
        } catch (error) {
            er(res, error);
        }
    },

    //Vendor Find Controller
    find: async (req, res) => {
        try {
            if (!req.isAuth) throw new Error(401);
            let data;
            switch (req._type) {
                case 0:
                    data = await Vendor.find({}).sort({ createdAt: -1 });
                    break;
                case 1:
                    data = await Vendor.findById(req._id);
                    break;
                default:
                    throw new Error(400);
            }
            data.password = null;
            sr(res, data);
        } catch (error) {
            er(res, error);
        }
    },

    state: async (req, res) => {
        try {
            if (!req.isAuth) throw new Error(401);
            if (req._type !== 0) throw new Error(401);
            const vendor = await Vendor.findByIdAndUpdate(req.body.id, { verified: req.body.state }, { new: true });
            sr(res, vendor);
        } catch (err) {
            er(res, err);
        }
    },
};