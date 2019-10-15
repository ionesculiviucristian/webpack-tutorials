// ES6 and Typescript Tutorial - 14 - Spread Operator
export {}

let displayAnotherColors = function (message: string, ...colors: any[]) {
    console.log(message);

    for (let i in colors) {
        console.log(colors[i]);
    }
};

let message = "List of colors";

let colors = ["Red", "Blue", "Green"];

displayAnotherColors(message, ...colors);
