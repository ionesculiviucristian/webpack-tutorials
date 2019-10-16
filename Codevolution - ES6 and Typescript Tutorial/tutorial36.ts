// ES6 and Typescript Tutorial - 36 - Symbols
export {}

let s = Symbol("First symbol");

console.log(typeof s);
console.log(s.toString());

let s2 = Symbol("Test");
let s3 = Symbol("Test");

console.log(s2 === s3); // false, always unique on declaration

let s4 = Symbol.for("RegSymbol");
let s5 = Symbol.for("RegSymbol");

console.log(s4 === s5); // true
console.log(Symbol.keyFor(s4)); // RegSymbol

let fname = Symbol("FirstName");

let person = {
    [fname]: "Chandler"
};

console.log(Object.getOwnPropertyNames(person)); // symbol id not listed
console.log(Object.getOwnPropertySymbols(person));
