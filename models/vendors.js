var mongoose = require('mongoose');

var vendorSchema = new mongoose.Schema({
    vid: { type: Number, unique: true, required: true },
    shopName: { type: String, required: true },
    ownerName: { type: String, required: true },
    address: {
        address1: { type: String, required: true },
        address2: { type: String },
        district: { type: String, required: true },
        state: { type: String, required: true },
        pin: { type: Number, required: true },
        // latitude: { type: Number },
        // longitude: { type: Number },
    },
    mobile: { type: String, required: true },
    email: { type: String, unique: true, required: true },
    shopPhoto: { type: String, required: true },
    ownerPhoto: { type: String, required: true },
    rating: { type: Number, default: 0 },
    varified: { type: Boolean, default: false },
    active: { type: Boolean, default: false },
}, { timestamps: true });

module.exports = mongoose.model('vendor', vendorSchema);