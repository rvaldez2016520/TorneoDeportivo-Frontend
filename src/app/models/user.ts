  
export class User {
    constructor (
        public _id: string,
        public username: string,
        public password: string,
        public name: string,
        public lastname: string,
        public email: string,
        public image: string,
        public role: string,
        public torneo: []
    ){}
}