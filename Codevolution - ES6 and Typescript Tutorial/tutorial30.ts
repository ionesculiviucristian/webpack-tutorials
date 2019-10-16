// ES6 and Typescript Tutorial - 30 - Sets
export {}

let mySet = new Set();

let obj1 = {};
let obj2 = {};

mySet.add("Hello");
mySet.add(1);
mySet.add(1); // mySet.size will be 2
mySet.add(obj1);
mySet.add(obj2); // mySet.size will be 4

console.log(mySet.size);

let newSet = new Set([1, 2, 3, 4, 4, 4]);
console.log(newSet.size); // 4

let chainSet = new Set().add("Hello").add("world");
console.log(chainSet.size); // 2

console.log(newSet.has(1));
console.log(newSet.has(10));

newSet.delete(1);

console.log(newSet.size);
