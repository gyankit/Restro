var mongoose = require('mongoose');

var recordSchema = new mongoose.Schema({
    mid: { type: String, required: true },
    vid: { type: String, required: true },
    cid: { type: String, required: true },
    category: { type: Number, required: true },
    quantity: { type: Number, required: true },
    price: { type: Number, required: true },
    status: { type: Boolean, required: true },
    comment: { type: String, required: true },
}, { timestamps: true });

module.exports = mongoose.model('Record', recordSchema);