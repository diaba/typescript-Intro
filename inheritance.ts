// create class person

class Person {
    //name
    name:string;

    constructor(name: string) {
        this.name = name;
    }

    dance(){
        console.log(`${this.name} is dancing ....`);
        
    }
}
let brad = new Person("Brad");
brad.dance();

// inheritance by adding behavior of the person like funny
class FunnyPerson extends Person{
    dance(){
        super.dance();
        console.log('Funny!');
    }
}

let kevin = new FunnyPerson("Kevin Heart");
kevin.dance();