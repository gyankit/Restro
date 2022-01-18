var mongoose = require('mongoose');

var supervisorSchema = new mongoose.Schema({
    sid: { type: Number, required: true },
    name: { type: String, required: true },
    // address: {
    //     address1: { type: String, required: true },
    //     address2: { type: String },
    //     district: { type: String, required: true },
    //     state: { type: String, required: true },
    //     pin: { type: Number, required: true }
    // },
    mobile: { type: String, required: true },
    email: { type: String, unique: true, required: true },
    photo: { type: String, required: true },
    varified: { type: Boolean, default: false },
    active: { type: Boolean, default: false },
});

module.exports = mongoose.model('supervisors', supervisorSchema);