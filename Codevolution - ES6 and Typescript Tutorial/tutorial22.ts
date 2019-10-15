// ES6 and Typescript Tutorial - 22 - Class Body and Methods
export {}

class Person {
    protected name: string;

    constructor (name: string) {
        this.name = name;
        console.log("Calling constructor...");
    }

    static staticMethod () {
        console.log("Calling static method...");
    }

    greetPerson () {
        console.log(`Hello ${this.name}!`)
    }
}

let p = new Person("Chandler");
Person.staticMethod();
p.greetPerson();
