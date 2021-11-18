var mongoose = require('mongoose');

var menuSchema = new mongoose.Schema({
    mid: { type: Number, required: true },
    vid: { type: Number, required: true },
    name: { type: String, unique: true, required: true },
    price: { type: Number, required: true },
    quantity: { type: Number, required: true },
    active: { type: Boolean, default: false },
    delete: { type: Boolean, default: false }
});

module.exports = mongoose.model('menus', menuSchema);