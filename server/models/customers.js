var mongoose = require('mongoose');

var customerSchema = new mongoose.Schema({
    cid: { type: Number, required: true },
    customerName: { type: String, required: true },
    address: {
        address1: { type: String, required: true },
        address2: { type: String },
        district: { type: String, required: true },
        state: { type: String, required: true },
        pin: { type: Number, required: true }
    },
    mobile: { type: String, required: true },
    email: { type: String, unique: true, required: true },
    active: { type: Boolean, default: false },
});

module.exports = mongoose.model('customers', customerSchema);