var express = require('express');
var cors = require('cors');

var db = require('./config/database');
// var webRouter = require('./routes/web');
var loginRouter = require('./routes/login');
var defaultRouter = require('./routes/default');
var vendorRouter = require('./routes/vendor');
var customerRouter = require('./routes/customer');
// var menuRouter = require('./routes/menu');
// var orderRouter = require('./routes/order');
// var ratingReviewRouter = require('./routes/ratingReview');

var app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

db.connect();

// app.use('/web', webRouter);
app.use('/web', defaultRouter);
app.use('/web/vendor', vendorRouter);
app.use('/web/customer', customerRouter);
app.use('/web/login', loginRouter);
// app.use('/web/menu', menuRouter);
// app.use('/web/order', orderRouter);
// app.use('/web/ratingReview', ratingReviewRouter);

module.exports = app;
