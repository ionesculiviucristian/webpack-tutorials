// ES6 and Typescript Tutorial - 38 - Iterables and Iterators
export {}

let iterable = [1, 2, 3];

const createIterator = (arr: Array<any>) => {
    let count = 0;

    return {
        next() {
            return count < arr.length
                ? { value: arr[count++], done: false }
                : { value: undefined, done: true }
        }
    }
};

let myIterator = createIterator(iterable);

console.log(myIterator.next());
console.log(myIterator.next());
console.log(myIterator.next());
console.log(myIterator.next());















