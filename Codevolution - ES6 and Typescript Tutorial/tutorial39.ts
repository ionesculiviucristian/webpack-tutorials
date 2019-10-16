// ES6 and Typescript Tutorial - 39 - Iterating Objects
export {}

let person: any = {
    fname: "Chandler",
    lname: "Bing"
};

// person is not iterable
// for (let p of person) {
//     console.log(p);
// }

person[Symbol.iterator] = function () {
  let properties = Object.keys(person);
  let count = 0;
  let isDone = false;
  let next = () => {
      if (count >= properties.length) {
          isDone = true;
      }

      return {
          value: this[properties[count++]],
          done: isDone
      }
  };

  return { next };
};

for (let p of person) {
    console.log(p);
}
