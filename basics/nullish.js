// initialize variables with Nullish Coalescing

let a = null;
let b = 10;

// with standard operators

let result = (a != null && a != undefined)? a : 0;

console.log(`Result is ${result}`);

// with nullish operator

result = a ?? b;
console.log(`Result is ${result}`);