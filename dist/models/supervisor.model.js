var mongoose = require('mongoose');

var supervisorSchema = new mongoose.Schema({
    name: { type: String, required: true },
    mobile: { type: String, required: true },
    email: { type: String, unique: true, required: true },
    verified: { type: Boolean, default: false },
    active: { type: Boolean, default: false },
    password: { type: String, required: true },
    photo: { type: String },
}, { timestamps: true });

module.exports = mongoose.model('Supervisor', supervisorSchema);