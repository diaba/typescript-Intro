class Building{
    type: string;
    squareFeet: number;
    constructor(  type: string, squareFeet: number) {
        this.squareFeet = squareFeet
        this.type =  type;
    }
     addTenant(){
         console.log("Add tenant");
         
     }
}