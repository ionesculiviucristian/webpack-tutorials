// ES6 and Typescript Tutorial - 29 - Sets & Maps
export {}

// "old" way
let mySet = Object.create(null);
mySet.id = 1; // if set to 0, then it wil not match

if (mySet.id) {
    console.log("id exists");
}

let myMap = Object.create(null);
myMap.name = "Chandler";

let val = myMap.name;
console.log(val);

myMap[100] = "Hello";
console.log(myMap["100"]);

let obj1 = {};
let obj2 = {};

//myMap[obj1] = "World";
//console.log(myMap[obj2]); // same string representation
