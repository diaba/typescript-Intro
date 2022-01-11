// function greet(person: {name: string}) {
//     return `Hello ${person.name}`;
// }
// const Abel = { name : "Abel"};
// console.log( greet(Abel) );
//same declaration
// type Person{ // 
//     name:string,
// }
function greet(person) {
    return "Hello ".concat(person.name);
}
var Abel = { name: "Abel" };
console.log(greet(Abel));
