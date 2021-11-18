var mongoose = require('mongoose');

var USER = process.env.MONGO_USER;
var PASS = process.env.MONGO_PASS;
var CLUSTER = process.env.MONGO_CLUSTER;
var DB = process.env.MONGO_DB;

var _URL = 'mongodb+srv://' + USER + ':' + PASS + '@' + CLUSTER + '.ruqzn.mongodb.net/' + DB + '?retryWrites=true&w=majority';

//var _URL = 'mongodb://127.0.0.1:27017/watero?directConnection=true&serverSelectionTimeoutMS=2000?retryWrites=false?replicaSet=rs';

module.exports = {
    connect: function () {
        mongoose.connect(_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
            .then(function () {
                console.log('MongoDB connnection successful!');
            })
            .catch(function (err) {
                console.warn('MongoDB connection failed (URL) : ' + _URL);
                console.error(err);
            });
    },

    close: function () {
        mongoose.connection.close();
        console.warn('MongoDB connnection closed!');
    }
};