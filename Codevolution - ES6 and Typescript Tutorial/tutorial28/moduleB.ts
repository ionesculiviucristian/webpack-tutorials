export function greet (message: string) {
    console.log(message);
}

export class GreetMessage {
    constructor () {
        console.log("constructor");
    }

    greet () {
        console.log("greet function");
    }
}