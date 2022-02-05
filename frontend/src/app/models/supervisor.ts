export class Supervisor {
    constructor(
        public name: string,
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
