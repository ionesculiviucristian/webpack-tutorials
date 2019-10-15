// ES6 and Typescript Tutorial - 13 - Rest Operator
export {}

let displayColors = function (message: string, ...colors: any[]) {
    console.log(message);

    for (let i in colors) {
         console.log(colors[i]);
     }
};

let message = "List of colors";

displayColors(message, "Red");
displayColors(message, "Red", "Blue");
displayColors(message, "Red", "Blue", "Green");
