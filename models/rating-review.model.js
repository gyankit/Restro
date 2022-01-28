var mongoose = require('mongoose');

var vendorRatingSchema = new mongoose.Schema({
    raiting: {
        stars: { type: Number, required: true },
        counts: { type: Number, required: true }
    }
}, { timestamps: true });

var vendorMenuRatingReviewSchema = new mongoose.Schema({
    vid: { type: String, required: true },
    mid: { type: String, required: true },
    cid: { type: String, required: true },
    review: { type: String, required: true },
    raiting: {
        stars: { type: Number, required: true },
        counts: { type: Number, required: true }
    }
}, { timestamps: true });

module.exports = mongoose.model('VendorRatings', vendorRatingSchema);
module.exports = mongoose.model('VendorMenuRatingReviews', vendorMenuRatingReviewSchema);