// ES6 and Typescript Tutorial - 21 - Class
export {}

// Not hoisted
//let p1 = new Person();

class Person {
    greet () {

    }
}

let p2 = new Person();
console.log(typeof p2); // function
// Syntactic/syntax sugar
console.log(p2.greet === Person.prototype.greet);

// Hoisted
employee();

function employee() {

}

employee();
