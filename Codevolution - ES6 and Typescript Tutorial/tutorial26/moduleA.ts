console.log("Module A log 1");
import { firstName as f, lastName, obj } from "./moduleB";
console.log("Module A log 2");

console.log(`${f} ${lastName}`);

//lastName = "Danny"; cannot be changed

obj.name = "Jane"; // can be changed

console.log(`${obj.name}`);
