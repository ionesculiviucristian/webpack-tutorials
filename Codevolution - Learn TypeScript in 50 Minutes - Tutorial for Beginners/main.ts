export default {}
let message = "Hello world!";
console.log(message);

let x = 10;
const y = 20;

let sum;
const title = "Example title";

let isBeginner: boolean = true;
let total: number = 0;
let name: string = "Juan";

let sentence: string = `My name is ${name}
and I am a beginner.`;

console.log(sentence);

let n: null = null;
let u: undefined = undefined;

let isNew: boolean = null;
let myName: string = undefined;

let list1: number[] = [1, 2, 3];
let list2: Array<number> = [1, 2, 3];

let person1: [string, number] = ["Chris", 22];

enum Color { Red = 5, Green, Blue }

let c: Color = Color.Blue;

console.log(c);

let randomValue: any = 10;
randomValue = true;
randomValue = "Some value";

let myVariable: unknown = "test value";

function hasName(obj: any): obj is { name: string } {
    return !!obj && typeof obj === "object" && "name" in obj;
}

if (hasName(myVariable)) {
    console.log(myVariable.name);
}

(myVariable as string).toUpperCase();

let a;
a = 10;
a = true;

let b = 20;
//b = true;

let multiType: number | boolean;
multiType = 10;
multiType = true;

function add(num1: number, num2?: number): number {
    return num2 ? num1 + num2 : num1;
}

add(5, 10);
console.log(add(5));

function fullName(person: { firstName: string, lastName: string }) {
    console.log(`${person.firstName} ${person.lastName}`);
}

let p = {
    firstName: "Bruce",
    lastName: "Wayne"
};

console.log(fullName(p));