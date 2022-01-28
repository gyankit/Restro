var mongoose = require('mongoose');

var menuSchema = new mongoose.Schema({
    vid: { type: String, required: true },
    name: { type: String, required: true },
    category: { type: String, required: true },
    quantity: { type: Number, required: true },
    price: { type: Number, required: true },
    photo: { type: String },
    active: { type: Boolean, default: false },
    varified: { type: Boolean, default: false },
    del: { type: Boolean, default: false }
}, { timestamps: true });

module.exports = mongoose.model('Menu', menuSchema);