export class Partido {
    constructor(
        public _id: string,
        public name: string,
        public teamOne:string,
        public goalsTeamOne:number,
        public teamTwo:string,
        public goalsTeamTwo: number
    ){}
}