var express = require('express');
var fileupload = require('express-fileupload')

var db = require('./config/database');
var loginRouter = require('./routes/login');
var defaultRouter = require('./routes/default');
var vendorRouter = require('./routes/vendor');
var customerRouter = require('./routes/customer');
var menuRouter = require('./routes/menu');
// var orderRouter = require('./routes/order');
// var ratingReviewRouter = require('./routes/ratingReview');

var app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(fileupload({
    createParentPath: true
}))

db.connect();

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

    if (req.method === 'OPTIONS') {
        return res.sendStatus(200);
    }
    next();
})

app.use('/web', defaultRouter);
app.use('/web/login', loginRouter);
app.use('/web/vendor', vendorRouter);
app.use('/web/customer', customerRouter);
app.use('/web/menu', menuRouter);
// app.use('/web/order', orderRouter);
// app.use('/web/ratingReview', ratingReviewRouter);

module.exports = app;
