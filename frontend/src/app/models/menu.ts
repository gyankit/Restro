export class Menu {
    constructor(
        public vid: string,
        public name: string,
        public category: string,
        public quantity: number,
        public price: number,
        public photo: string,
        public active: boolean,
        public verified: boolean,
        public del: boolean,
        public _id?: string,
    ) { }
}
