var mongoose = require('mongoose');

var recordSchema = new mongoose.Schema({
    oid: { type: Number, required: true },
    mid: { type: Number, required: true },
    vid: { type: Number, required: true },
    cid: { type: Number, required: true },
    Mode: { type: Number, required: true },
    price: { type: Number, required: true },
    quantity: { type: Number, required: true }
});

module.exports = mongoose.model('records', recordSchema);