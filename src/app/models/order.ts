export class Order {
    constructor(
        public mid: string,
        public cid: string,
        public vid: string,
        public name: string,
        public quantity: number,
        public price: number,
        public status: number,
        public address: {
            address1: string,
            address2: string | null | undefined,
            district: string,
            state: string,
            pin: string,
        },
        public photo: string,
        public transactionStatus: boolean,
        public transactionMode: number,
        public _id?: string,
        public createdAt?: string,
        public updatedAt?: string
    ) { }
}
