// JavaScript Reduce Method - Explained with Many Examples - https://www.youtube.com/watch?v=7tAueErVUQU

let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//console.log(nums);

let incEnums = nums.map(x => x + 1);
//console.log(incEnums);

let numSum = nums.reduce((x, y) => x + y, 0);
//console.log(numSum);

let reversNums = nums.reduce((carry, item) => [item, ...carry], []);
//console.log(reversNums);

let num = [1, 2, 3, 3, 5, 3, 3, 2, 1];
let num2 = [10.1, 11.2, 11.2, 10.1, 12];

const filter = (predicate, a) => a.reduce((carry, item, i) => predicate(item, i) ? [...carry, item] : carry, []);

const duplicateFor = (v, n) => Array.from(new Array(n)).map(_ => v);

const duplicate = list => list.reduce((carry, item) => [...carry, ...duplicateFor(item, 2)], []);
const duplicate2 = (list, n) => list.reduce((carry, item) => [...carry, ...duplicateFor(item, n)], []);

//console.log(duplicate2(num, 5));

const isPalindrome = a => a.slice(0, Math.floor(a.length / 2)).join("") === a.slice(Math.ceil(a.length / 2)).reverse().join("");
const isPalindrome2 = a => a
    .slice(0, Math.floor(a.length / 2))
    .every((v, i) => v === a[a.length - i - 1]);

//console.log(isPalindrome2(num2));

let strings = ["Steve", "Natasha", "Tony", "Clark"];

let listThings = function (acc, val, i) {
    return `${acc}\n${i}. ${val}`;
};

let listStrings = strings.reduce(listThings, '');
//console.log(listStrings);

let arrOfArrs = [
      ['Steve', 'Rogers', 'Captain America']
    , ['Natasha', 'Romanoff', 'Black Widow']
    , ['Tony', 'Stark']
    , ['Clint', 'Barton']
];

let flattened = arrOfArrs.reduce((acc, val) => acc.concat(val));
//console.log(flattened);

let makeCSV = function (acc, val) {
    return `${acc}\n${val[0]},${val[1]}`
};

let superCSV = arrOfArrs.reduce(makeCSV, 'Firstname,Lastname');
//console.log(superCSV);

let makeCSVRow = (acc, val) => {
    return `${acc},${val}`;
};

let makeCSV2 = (acc1, val1) => {
    let row = val1.slice(1).reduce(makeCSVRow, val1.slice(0, 1));
    return `${acc1}\n${row}`;
};

let superCSV2 = arrOfArrs.reduce(makeCSV2, 'Firstname,Lastname,Super Identity');
//console.log(superCSV2);

let myCSV = arrOfArrs
    .reduce((carry, item) => [...carry, item.join()], [])
    .reduce((carry, item) => `${carry}\n${item}`, 'Firstname,Lastname,Super Identity');

let myCSV2 = arrOfArrs.reduce((carry, item) => `${carry}\n${item.join()}`, 'Firstname,Lastname,Super Identity');

//console.log(myCSV2);

let add1 = num => num + 1;
let doublet = num => num * 2;
let triplet = num => num * 3;

let arrOfFuncs = [add1, doublet, triplet];

let apply = (acc, val) => val(acc);

let result = [add1, doublet, triplet].reduce(apply, 2);

//console.log(result);

let compose = arr => val => arr.reduce(apply, val);

let add1DoubleTriple = compose(arrOfFuncs);

console.log(add1DoubleTriple(2));