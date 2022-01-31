const fs = require('fs')
const Customer = require('../models/customer.model');
const Vendor = require('../models/vendor.model');
const Supervisor = require('../models/supervisor.model');
const Menu = require('../models/menu.model');
const { er, sr } = require('../helper/response');

const fixedpath = 'assets/images'

module.exports = {
    upload: async (req, res) => {
        try {
            let data;
            const file0 = req.files.file0;
            const filename0 = `${fixedpath}/${req.body.type}/${file0.name}.${file0.mimetype.split("/", 2)[1]}`;
            switch (req.body.type) {
                case 'menu':
                    data = await Menu.findByIdAndUpdate({ _id: file0.name }, { $set: { photo: filename0 } }, { new: true });
                    break;
                case 'admin':
                    data = await Supervisor.findByIdAndUpdate({ _id: file0.name }, { $set: { photo: filename0 } }, { new: true });
                    break;
                case 'customer':
                    data = await Customer.findByIdAndUpdate({ _id: file0.name }, { $set: { photo: filename0 } }, { new: true });
                    break;
                case 'vendor':
                    const file1 = req.files.file1;
                    const filename1 = `${fixedpath}/${req.body.type}/${file1.name}_shop.${file1.mimetype.split("/", 2)[1]}`;
                    data = await Vendor.findByIdAndUpdate({ _id: file0.name }, { $set: { ownerPhoto: filename0, shopPhoto: filename1 } }, { new: true });
                    file1.mv('frontend/src/' + filename1);
                    break;
            }
            file0.mv('frontend/src/' + filename0);
            sr(res, data);
        } catch (error) {
            er(res, error);
        }
    },

    remove: async (file) => {
        try {
            fs.unlink('frontend/src/' + file, (e) => {
                if (e) throw e;
                return true;
            })
        } catch (e) {
            return false;
        }
    }
}