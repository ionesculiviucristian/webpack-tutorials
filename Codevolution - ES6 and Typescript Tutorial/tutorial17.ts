// ES6 and Typescript Tutorial - 17 - Destructuring Array
export {}

let employee = ["Chandler", "Bing", "Male"];

let [firstName, lastName, gender, age] = employee;
let [, , onlyGenre] = employee;
let [justTheName, ...elements] = employee;
let [, , , , someLocation = "Tokio"] = employee;

console.log(firstName);
console.log(lastName);
console.log(gender);
console.log(age);
console.log(onlyGenre);
console.log(justTheName);
console.log(elements);
console.log(someLocation);
