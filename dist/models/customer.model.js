var mongoose = require('mongoose');

var customerSchema = new mongoose.Schema({
    name: { type: String, required: true },
    address: {
        address1: { type: String, required: true },
        address2: { type: String },
        district: { type: String, required: true },
        state: { type: String, required: true },
        pin: { type: Number, required: true }
    },
    mobile: { type: String, required: true },
    email: { type: String, unique: true, required: true },
    verified: { type: Boolean, default: false },
    active: { type: Boolean, default: false },
    password: { type: String, required: true },
    photo: { type: String },
}, { timestamps: true });

module.exports = mongoose.model('Customer', customerSchema);