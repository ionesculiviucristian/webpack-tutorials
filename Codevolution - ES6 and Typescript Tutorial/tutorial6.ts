// ES6 and Typescript Tutorial - 6 - let Keyword
export {}

function greetAnotherPerson (name: string) {
    let greet;
    if (name === "Chandler") {
        greet = "Hello Chandler";
    } else {
        greet = "Hi there"
    }
    console.log(greet);
}
greetAnotherPerson("Chandler");

var a = 1;
var b = 2;

if (a === 1) {
    var a = 10;
    // block scoped to if
    let b = 20;
    console.log(a); // 10
    console.log(b); // 20
}

console.log(a); // 10
console.log(b); // 2
