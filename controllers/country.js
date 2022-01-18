var Country = require('../models/countries');
var Countries = require('country-state-city').Country.getCountryByCode('IN');
var States = require('country-state-city').State.getStatesOfCountry('IN');
var Cities = require('country-state-city').City.getCitiesOfCountry('IN');

//Function to send JSON response
function sendResponse(res, err, data) {
    if (err) {
        res.status(400).json(err);
    } else {
        res.status(200).json(data);
    }
}

module.exports = {
    //Country Find All Controller
    find: function (req, res) {
        Country.find({}, function (err, data) {
            sendResponse(res, err, data);
        });
    },

    //Country Create Controller
    create: function (req, res) {
        Country.collection.drop(function () {
            console.log("Table Drop");
        });
        var country = new Country();
        country.name = Countries.name;
        country.code = Countries.isoCode;
        country.latitude = Countries.latitude;
        country.longitude = Countries.longitude;
        var arstate = [];
        for (var i = 0; i < States.length; i++) {
            var state = {};
            state.name = States[i].name;
            state.code = States[i].isoCode;
            state.latitude = States[i].latitude;
            state.longitude = States[i].longitude;
            var arcity = [];
            for (var j = 0; j < Cities.length; j++) {
                var city = {};
                if (States[i].isoCode == Cities[j].stateCode) {
                    city.name = Cities[j].name;
                    city.latitude = Cities[j].latitude;
                    city.longitude = Cities[j].longitude;
                    arcity.push(city);
                }
            }
            state.cities = arcity;
            arstate.push(state);
        }
        country.states = arstate;

        country.save(function (err, data) {
            console.log("Table Create");
            sendResponse(res, err, data);
        });
    }
};
