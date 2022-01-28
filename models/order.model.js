var mongoose = require('mongoose');

var orderSchema = new mongoose.Schema({
    mid: { type: String, required: true },
    vid: { type: String, required: true },
    cid: { type: String, required: true },
    category: { type: String, required: true },
    quantity: { type: Number, required: true },
    price: { type: Number, required: true },
    status: { type: Number, required: true },
    transactionStatus: { type: Boolean, required: true },
    transactionMode: { type: Number, required: true }
}, { timestamps: true });

module.exports = mongoose.model('Order', orderSchema);