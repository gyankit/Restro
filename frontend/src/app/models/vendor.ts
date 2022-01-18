export class Vendor {
    constructor(
        public vid: number,
        public ownerName: string,
        public shopName: string,
        public address: {
            address1: string,
            address2: string | null | undefined,
            district: string,
            state: string,
            pin: string,
        },
        public mobile: string,
        public email: string,
        public ownerPhoto: string,
        public shopPhoto: string,
        public rating: number,
        public varified: boolean,
        public active: boolean,
        public id?: string,
    ) { }
}
