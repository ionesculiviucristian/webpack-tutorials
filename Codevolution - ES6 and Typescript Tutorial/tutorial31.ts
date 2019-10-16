// ES6 and Typescript Tutorial - 31 - WeakSets
export {}

let mySet = new Set();
let key: any  = {};

mySet.add(key);
console.log(mySet.size); // 1

key = null;
console.log(mySet.size); // 1

key = [...mySet][0];

let set = new WeakSet();

let key2: any = {};
set.add(key2);
console.log(set.has(key2)); // true

key2 = null;
console.log(set.has(key2)); // false
