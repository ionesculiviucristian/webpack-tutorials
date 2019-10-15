// ES6 and Typescript Tutorial - 18 - Destructuring Objects
export {}

let employee = {
    firstName: "Chandler",
    lastName: "Bing",
    gender: "Male"
};

let { firstName: f, lastName: l, gender: g } = employee;

console.log(f);
console.log(l);
console.log(g);
