class PLayer{
    name: string;
    height: number;
    constructor(  name: string, height: number) {
        this.height = height
        this.name =  name;
    }
     run(){
         console.log("Run");
         
     }
}
interface PlayerType {
    type: "Soccer"| "BasketBall";
} 
class SoccerPlay extends Player {
    playerNumber:number;
    playerPosition:string;
    type:PlayerType;
    constructor(name:string, height:number, playerNumber:number, playerPosition:string, type:PlayerType){
        super(name, height);
        this.playerNumber = playerNumber;
        this.playerPosition = playerPosition;
        this.type = type;
    }
    run() {
        super.run();
    }
    getPosition(){
        console.log(`Player is playing at position ${this.playerPosition}`);
    }

    getPlayerNumber(){
        console.log(`The players number is ${this.playerNumber}`);   
    }
}

const soccerGuy:SoccerPlay = new SoccerPlay("bob", 187, 22, "forward", {type:"Soccer"});

soccerGuy.getPosition();
soccerGuy.getPlayerNumber();
class BasketBall extends PLayer {
    playerNumber:number;
    playerPosition:string;
    type:PlayerType;
    constructor(name:string , height:number, playerNumber:number, playerPosition:string, type:PlayerType ){
        super(name, height);
        this.playerNumber = playerNumber;
        this.playerPosition = playerPosition;
        this.type = type;
    }
    run() {
        super.run();
    }
    getPosition(){
        console.log(`Player is playing at position ${this.playerPosition}`);
    }

    getPlayerNumber(){
        console.log(`The players number is ${this.playerNumber}`);   
    }
}
