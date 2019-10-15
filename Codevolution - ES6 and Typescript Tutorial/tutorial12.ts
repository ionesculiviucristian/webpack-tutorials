// ES6 and Typescript Tutorial - 12- Default Function Parameters
export {}

let percentBonus = 0.1;

let getValue = function (value = 10, extra = 5, bonus = value * percentBonus) {
    console.log(value + extra, bonus);
    console.log(arguments.length);
};

getValue();
getValue(20);
getValue(30);
getValue(40, 100);
getValue(undefined, 50); // 60
getValue(10, 10, 30);
