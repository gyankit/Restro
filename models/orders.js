var mongoose = require('mongoose');

var orderSchema = new mongoose.Schema({
    mid: { type: Number, required: true },
    vid: { type: Number, required: true },
    cid: { type: Number, required: true },
    quantity: { type: Number, required: true },
    price: { type: Number, required: true },
    status: { type: Number, required: true },
    transactionStatus: { type: Boolean, required: true },
    transactionMode: { type: Number, required: true }
});

module.exports = mongoose.model('order', orderSchema);