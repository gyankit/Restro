export class Login {
    constructor(
        public email: string,
        public password: string,
        public lid: number,
        public active: boolean,
        public type: number,
        public oldPassword?: any,
    ) { }
}

