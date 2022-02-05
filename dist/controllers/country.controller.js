const Country = require('../models/country.model');
const Countries = require('country-state-city').Country.getCountryByCode('IN');
const States = require('country-state-city').State.getStatesOfCountry('IN');
const Cities = require('country-state-city').City.getCitiesOfCountry('IN');
const { er, sr } = require('../helper/response');

module.exports = {
    //Country Find All Controller
    find: async (req, res) => {
        try {
            const data = await Country.find({});
            sr(res, data);
        } catch (err) {
            er(res, data);
        }
    },

    //Country Create Controller
    create: async (req, res) => {
        try {
            await Country.collection.drop();
            console.log("Table Drop")
            let country = new Country();
            country.name = Countries.name;
            country.code = Countries.isoCode;
            country.latitude = Countries.latitude;
            country.longitude = Countries.longitude;
            let arstate = [];
            for (let i = 0; i < States.length; i++) {
                let state = {};
                state.name = States[i].name;
                state.code = States[i].isoCode;
                state.latitude = States[i].latitude;
                state.longitude = States[i].longitude;
                let arcity = [];
                for (let j = 0; j < Cities.length; j++) {
                    let city = {};
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

            const data = await country.save();
            console.log("Table Create");
            sr(res, data);
        }
        catch (err) {
            er(res, err);
        }
    }
};
