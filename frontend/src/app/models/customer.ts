export class Customer {
    constructor(
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
        public password: string,
        public verified: boolean,
        public active: boolean,
        public _id?: string,
        public createdAt?: string,
        public updatedAt?: string
    ) { }
}
