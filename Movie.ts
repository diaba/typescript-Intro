class Movie{
    title: string;
    length: number;
    constructor(  title: string, length: number) {
        this.length = length
        this.title =  title;
    }
     play(){
         console.log(this.title+" can "+ "Play "+ this.length);
         
     }
}