// ES6 and Typescript Tutorial - 35 - WeakMaps
export {}

let myMap = new WeakMap();

let obj1: any = {};

myMap.set(obj1, "Hello world");
console.log(myMap.get(obj1));
obj1 = null;
