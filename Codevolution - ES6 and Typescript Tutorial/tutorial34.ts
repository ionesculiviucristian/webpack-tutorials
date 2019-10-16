// ES6 and Typescript Tutorial - 34 - forEach
export {}

let numbers = [2, 4, 6, 8];

const arrayFunction = (element: any, index: any, array: any) => {
    console.log(`arr["${index}"]="${element}"`);
};

numbers.forEach(arrayFunction);

let myMap = new Map([
    ["fname", "Chandler"],
    ["lname", "Bing"]
]);

const mapFunction = (value: any, key: any, callingMap: any) => {
    console.log(key + " " + value);
    console.log(myMap === callingMap);
};

myMap.forEach(mapFunction);

let mySet = new Set([1, 2, 3]);

const setFunction = (value: any, key: any, callingSet: any) => {
    console.log(key + " " + value);
    console.log(mySet === callingSet);
};

mySet.forEach(setFunction);
