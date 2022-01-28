var Review = require('../models/rating-review.model');
var Menu = require('../models/menu.model');
var Customer = require('../models/customer.model');
const { er, sr } = require('../helper/response');

module.exports = {
    //Review Create Controller
    create: async (req, res) => {
        try {
            const review = new Review(req.body);
            const customer = await Customer.findById(req.params.customer);
            const menu = await Menu.findById(req.params.menu);
            if (customer === null || menu === null) throw new Error('Bad Request');
            if (req.body.shop === menu.shop) throw new Error("Shop id of review not matching with Shop id of menu.");
            const data = await review.save();
            sr(res, data);
        } catch (error) {
            er(res, error);
        }
    },

    //Review Update Controller
    update: async (req, res) => {
        try {
            const review = new Review(req.body);
            const data = await Review.findByIdAndUpdate(req.params.id, review);
            sr(res, data);
        } catch (error) {
            er(res, error);
        }
    },

    //Review Delete Controller
    delete: async (req, res) => {
        try {
            await Review.findByIdAndDelete(req.params.id);
            sr(res, true);
        } catch (error) {
            er(res, error);
        }
    },

    //Review Find Controller
    find: async (req, res) => {
        try {
            let data;
            switch (req.body.req) {
                case 0:
                    data = await Review.find({});
                    break;
                case 1:
                    data = await Review.findById(req.body.id);
                    break;
                default:
                    throw new Error('Bad Request');
            }
            sr(res, data);
        } catch (error) {
            er(res, error);
        }
    }
};
