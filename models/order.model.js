var mongoose = require('mongoose');

var orderSchema = new mongoose.Schema({
    mid: { type: String, required: true },
    vid: { type: String, required: true },
    cid: { type: String, required: true },
    name: { type: String, required: true },
    quantity: { type: Number, required: true },
    price: { type: Number, required: true },
    status: { type: Number, required: true },
    address: {
        address1: { type: String, required: true },
        address2: { type: String },
        district: { type: String, required: true },
        state: { type: String, required: true },
        pin: { type: Number, required: true },
    },
    photo: { type: String, required: true },
    transactionStatus: { type: Boolean, required: true },
    transactionMode: { type: Number, required: true }
}, { timestamps: true });

module.exports = mongoose.model('Order', orderSchema);