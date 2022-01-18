export class Customer {
    constructor(
        public cid: number,
        public name: string,
        public address: {
            address1: string,
            address2: string | null | undefined,
            district: string,
            state: string,
            pin: string,
        },
        public mobile: string,
        public email: string,
        public photo: string,
        public varified: boolean,
        public active: boolean,
        public id?: string,
    ) { }
}
