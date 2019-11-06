// Async Function Composition with JavaScript Promises

let apply = (acc, val) => val(acc);
let compose = (...funcs) => x => funcs.reduce(apply, x);

let add1 = x => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(x + 1), 1000);
    });
};

let add2 = x => x + 2;

//let add3 = compose(add1, add2);
//console.log(add3(3));

add1(2)
    .then(add2)
    .then(console.log)
    .catch(console.log);