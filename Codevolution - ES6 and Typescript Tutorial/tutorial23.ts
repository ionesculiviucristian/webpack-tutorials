// ES6 and Typescript Tutorial - 23 - Class Inheritance
export {}

class Person {
    protected name: string;

    constructor (name: string) {
        this.name = name;

        console.log("Person constructor with " + this.name);
    }

    getId () {
        return 10;
    }
}

class Employee extends Person {
    constructor (name: string) {
        super(name);

        console.log("Employee constructor " + this.name);
    }

    getId () {
        return super.getId();
    }
}

let e = new Employee("Daria"); // logs initially "Person constructor"
console.log(e.getId());
