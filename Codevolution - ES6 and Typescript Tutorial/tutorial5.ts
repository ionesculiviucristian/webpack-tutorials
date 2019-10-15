// ES6 and Typescript Tutorial - 5 - Var Hoisting & Functional Scope
export {}

function greetPerson () {
    // greet is hoisted (declared automatically by javascript at the beginning of the function)
    // var greet;
    if (name === "Chandler") {
        greet = "Hello Chandler";
    } else {
        greet = "Hi there"
    }
    console.log(greet);
    // functional scope
    var greet;
}
greetPerson();
