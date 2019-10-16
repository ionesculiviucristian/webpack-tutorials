// ES6 and Typescript Tutorial - 32 - Maps
export {}

let myMap = new Map();

myMap.set("firstName", "Chandler");
myMap.set("age", 30);

console.log(myMap.get("age"));

let obj1 = {};
let obj2 = {};

myMap.set(obj1, 10);
myMap.set(obj2, 20);

console.log(myMap.get(obj1));
myMap.delete("firstName");
myMap.clear();

console.log(myMap.size);
console.log(myMap.has("firstName"));
