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
class ApartmentBuilding extends Building {
    apartmentNumber:number;
    constructor(type:string, squareFeet:number, apartmentNumber:number){
        super(type, squareFeet);
        this.apartmentNumber = apartmentNumber;
    }

    addTenant(){
        super.addTenant();
    }

    getApartmentNumber(){
        console.log(`The apartment number is ${this.apartmentNumber}`);
    }

    getSquareFeet(){
        console.log(`The square feet is ${this.squareFeet}`);
    }
}


interface buildingType {
    type: "commercial" | "residential";
}
class OfficeBuilding extends Building {
    officeNumber:number;
    constructor(type:string, squareFeet:number, officeNumber:number){
        super(type, squareFeet);
        this.officeNumber = officeNumber;
    }

    addTenant(){
        super.addTenant();
    }

    getOfficeNumber(){
        console.log(`The office number is ${this.officeNumber}`);
    }

    getSquareFeet(){
        console.log(`The square feet is ${this.squareFeet}`);
    }
}