// ES6 and Typescript Tutorial - 8 - const Keyword
export {}

let num1;
const num2 = 10; // must be initialized always and cannot be changed after that

const obj1 = {
    name: "Johny"
};

console.log(obj1.name);

obj1.name = "Tom"; // can be changed in object but cannot be assigned a new object like obj1 = {}

console.log(obj1.name);
