export class Country {
    constructor(
        public name: String,
        public code: String,
        public latitude: String,
        public longitude: String,
        public states: [{
            name: String,
            code: String,
            latitude: String,
            longitude: String,
            cities: [{
                name: String,
                latitude: String,
                longitude: String
            }]
        }]
    ) { }
}

export class State {
    constructor(
        name: String,
        code: String,
    ) { }
}

export class City {
    constructor(
        city: String
    ) { }
}
