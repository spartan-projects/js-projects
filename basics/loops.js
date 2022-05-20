// File used only for "for" loops

let myArray = new Array();
let max = 9;
let arrayMaxLength = max;

let randomFunction = (max, arrayLength , array, consoleCallback) => {

    for (let i = 0; i < arrayLength; i++) {
        let randomNumber = Math.floor(Math.random() * (max + 1));

        array.push(randomNumber);
    }

    consoleCallback();
}

randomFunction(max, arrayMaxLength, myArray, () => {
    for (let i = 0; i < myArray.length; i++) {
        console.log(`Value at ${i} is ${myArray[i]}`);
    }
});