// ES6 and Typescript Tutorial - 40 - Generators
export {}

function *createGenerator() {
    yield 1;
    console.log("After ist yield");
    yield 2;
    console.log("After 2nd yield");
}

let myGen = createGenerator();

console.log(myGen.next());
console.log(myGen.next());
console.log(myGen.next());

let person: any = {
    fname: "Chandler",
    lname: "Bing"
};

person[Symbol.iterator] = function *() {
    let properties = Object.keys(person);

    for (let t of properties) {
        yield this[t];
    }
};

for (let p of person) {
    console.log(p);
}
