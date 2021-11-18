var mongoose = require('mongoose');

var loginSchema = new mongoose.Schema({
    email: { type: String, required: true },
    password: { type: String, required: true },
    oldPassword: [],
    active: { type: Boolean, default: false },
    type: { type: Number, required: true },
    lid: { type: Number, required: true }
}, { timestamps: true });

module.exports = mongoose.model('login', loginSchema);