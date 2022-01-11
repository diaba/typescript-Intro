class Movie{
    title: string;
    length: number;
    constructor(  title: string, length: number) {
        this.length = length
        this.title =  title;
    }
    getTitle(){
        return this.title;
    }
     play(){
         console.log(this.title+" can "+ "Play "+ this.length);
         
     }
}
class ActionAdventureMovie extends Movie{
    effect: string;
    constructor(title: string, length: number, effect:string) {
        super(title,length);
        this.effect = effect;
    }
    play(): void {
        console.log(super.getTitle()+" has length of "+this.length + " and effect of "+ this.effect);
        
    }
}
let movie = new ActionAdventureMovie('Ocean seven',120,'Bomb');
movie.play();