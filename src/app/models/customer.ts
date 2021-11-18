export class Customer {
    constructor(
        public cid: number,
        public customerName: string,
        public address: {
            address1: string,
            address2: string | null | undefined,
            district: string,
            state: string,
            pin: string,
        },
        public mobile: string,
        public email: string,
        public active: boolean,
        // public photo: string,
        public id?: string,
    ) { }
}
