// ES6 and Typescript Tutorial - 10 - Arrow Functions
export {}

var getRegularValue = function () {
    return 10;
};

console.log(getRegularValue());

const getArrowValue = (m: number, n: number) => 20 * m + n;

console.log(getArrowValue(2, 5));

console.log(typeof getArrowValue); // function
