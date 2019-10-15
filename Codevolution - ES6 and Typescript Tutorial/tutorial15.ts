// ES6 and Typescript Tutorial - 15 - Object Literals Part 1
export {}

let firstName = "Chandler";
let lastName = "Bing";

let person = {
    firstName, // same as firstName: firstName
    lastName // same as lastName: lastName
};

console.log(person.firstName);
console.log(person.lastName);

function createPerson(firstName: string, lastName: string, age: number) {
    let fullName = firstName + " " + lastName;
    return {
        firstName,
        lastName,
        fullName,
        isSenior () { // same as isSenior: function () {
            return age > 60;
        }
    };
}

let p = createPerson("Jimmy", "Geller", 32);

console.log(p.firstName);
console.log(p.lastName);
console.log(p.fullName);
console.log(p.isSenior());
