var mongoose = require('mongoose');

var countrySchema = new mongoose.Schema({
    name: { type: String, unique: true, required: true },
    code: { type: String, unique: true, required: true },
    latitude: { type: String },
    longitude: { type: String },
    states: [{
        name: { type: String, unique: true, required: true },
        code: { type: String, unique: true, required: true },
        latitude: { type: String },
        longitude: { type: String },
        cities: [{
            name: { type: String, unique: true, required: true },
            latitude: { type: String },
            longitude: { type: String }
        }]
    }],
});

module.exports = mongoose.model('countries', countrySchema);

