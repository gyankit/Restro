var mongoose = require('mongoose');

var vendorRatingSchema = new mongoose.Schema({
    vid: { type: Number, required: true },
    raiting: {
        stars: { type: Number, required: true },
        counts: { type: Number, required: true }
    }
});

var vendorMenuRatingReviewSchema = new mongoose.Schema({
    vid: { type: Number, required: true },
    mid: { type: Number, required: true },
    cid: { type: Number, required: true },
    review: { type: String, required: true },
    raiting: {
        stars: { type: Number, required: true },
        counts: { type: Number, required: true }
    }
});

module.exports = mongoose.model('vendorRatings', vendorRatingSchema);
module.exports = mongoose.model('vendorMenuRatingReviews', vendorMenuRatingReviewSchema);