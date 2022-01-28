const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Supervisor = require('../models/supervisor.model');
const Vendor = require('../models/vendor.model');
const Customer = require('../models/customer.model');
const { sr } = require('../helper/response');

module.exports = {
    login: async (req, res) => {
        try {
            let user;
            switch (req.body.type) {
                case 0:
                    user = await Supervisor.findOne({ email: req.body.email, active: true, varified: true });
                    break;
                case 1:
                    user = await Customer.findOne({ email: req.body.email, active: true, varified: true });
                    break;
                case 2:
                    user = await Vendor.findOne({ email: req.body.email, active: true, varified: true });
                    break;
                default:
                    throw new Error('Invalid Login Credentials');
            };
            if (user === null) throw new Error('Invalid Login Credentials');
            const match = await bcrypt.compare(req.body.password, user.password);
            if (!match) throw new Error('Invalid Login Credentials');
            const token = jwt.sign({ id: user.id, type: req.body.type }, 'somespecialsecretkey');
            const data = {
                id: user.id,
                type: req.body.type,
                token: token
            }
            res.status(200).json(data);
        } catch (err) {
            res.status(400).send(err.message);
        }
    },

    register: async (req, res) => {
        try {
            let profile, match;
            switch (req.body.type) {
                case 'admin':
                    match = await Supervisor.findOne({ email: req.body.email });
                    profile = new Supervisor(req.body.profile);
                    break;
                case 'customer':
                    match = await Customer.findOne({ email: req.body.email });
                    profile = new Customer(req.body.profile);
                    break;
                case 'vendor':
                    match = await Vendor.findOne({ email: req.body.email });
                    profile = new Vendor(req.body.profile);
                    break;
                default:
                    throw new Error('Invalid Login Credentials');
            }
            if (match !== null) throw new Error('Email Already Exists');
            const salt = await bcrypt.genSaltSync(12);
            profile.password = await bcrypt.hashSync(profile.password, salt);
            const user = await profile.save();
            res.status(201).send(user._id);
        } catch (err) {
            res.status(400).json(err.message);
        }
    }
}