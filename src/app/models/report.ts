  
export  class Report {
    constructor(
       public torneo:[],
       public team:[],
       public partido:[],
       public goals: number,
       public goalsAgainst: number,
       public goalDifference:number,
       public score: number
    ){}
}