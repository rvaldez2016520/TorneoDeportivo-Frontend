
export  class Torneo {
    constructor(
       public _id:string,
       public name:string,
       public team:[],
       public report:[],
       public partido:[]
    ){}
}