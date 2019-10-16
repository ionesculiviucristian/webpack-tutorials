// ES6 and Typescript Tutorial - 37 - Symbol iterator
export {}

let str = "Hello";
let arr = [1, 2, 3];
let num = 5;
let obj = { name: "Chandler" };

console.log("For str - " + typeof str[Symbol.iterator]);
console.log("For arr - " + typeof arr[Symbol.iterator]);
//console.log("For num - " + typeof num[Symbol.iterator]); // undefined
//console.log("For obj - " + typeof obj[Symbol.iterator]); // undefined
