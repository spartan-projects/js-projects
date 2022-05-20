// data types: number

let number = 345;
let float = 12.36;

console.log(">>>>>>> Data Type: Number >>>>>>>");
console.log(`The number ${number} is type ${typeof number}`);
console.log(`The float ${float} is type ${typeof float}`);

// data types: Infinity, -Infinity and NaN
console.log(">>>>>>> Data Type: Infinity, -Infinity and NaN >>>>>>>");
let divisionByZero = 1/0;
console.log (`1 divided by zero is ${divisionByZero}`);

let naNVariable = "some string"/9;
console.log (`The string "1" divided by 9 is ${naNVariable}`);

// data types: BigInt
console.log(">>>>>>> Data Type: BigInt >>>>>>>");
const bigNumber = 1234567890123456789012345678901234567890n;
console.log(`The Number ${bigNumber} is type ${typeof bigNumber}`);

// data types: string
console.log(">>>>>>> Data Type: String >>>>>>>");
let stringDoubleQuoted = "double quoted string";
console.log (`Double quoted string is: "${stringDoubleQuoted}"`);

let stringSingleQuoted = "single quoted string";
console.log (`Single quoted string is: "${stringSingleQuoted}"`);

let backtickString = `BacktickString with single quoted string "${stringSingleQuoted}" and double quoted string "${stringDoubleQuoted}"`;
console.log (`BacktickString is ${backtickString}`);

//data types: boolean
// boolean declarations
const booleanConstant = true;
console.log(`Declared boolean constant: ${booleanConstant}`);

let boolean = false;
console.log(`Declared boolean variable: ${boolean}`);