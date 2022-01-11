// Create an interface
interface Stark{ // 
    name:string,
}

function printName(stark: Stark) {
    console.log(stark.name);  
}

// calling printName
printName({name:'NoName'});

