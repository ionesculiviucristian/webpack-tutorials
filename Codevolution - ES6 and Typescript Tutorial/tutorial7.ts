// ES6 and Typescript Tutorial - 7 - let in for loops
export {}

for (var i = 1; i <= 5; i++) {
    setTimeout(function () {
        console.log(i); // the loop already finished so 6 is always passed as the value
    }, 1000);
}

for (let i = 1; i <= 5; i++) {
    setTimeout(function () {
        console.log(i);
    }, 1000);
}
