import customName from './moduleB'; // can have any name when exported as default
import { default as n } from './moduleB';

console.log(customName);
console.log(n);
