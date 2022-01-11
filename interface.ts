// function greet(person: {name: string}) {
//     return `Hello ${person.name}`;
// }
// const Abel = { name : "Abel"};
// console.log( greet(Abel) );

interface Person{ // 
    name:string,
}
//same declaration
// type Person{ // 
//     name:string,
// }
function greet(person: Person) {
    return `Hello ${person.name}`;
}
const Abel = { name : "Abel"};
console.log( greet(Abel) );
