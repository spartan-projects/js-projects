// callback functions

// long definition
console.log(`###### LONG FUNCTIONS + CALLBACKS DEFINITIONS ######`)
function globalFunction (id, callbackPositive, callbackNegative) {
    if (id >= 0) {
        callbackPositive(id);
    } else {
        callbackNegative(id);
    }
};

let callbackPositive = function (id) {
    let result = `The ${id} number is possitive`;
    console.log(result);
};

let callbackNegative = function(id) {
    let result = `The ${id} number is negative`;
    console.log(result);
};

globalFunction(12, callbackPositive, callbackNegative);

// using arrow functions
console.log(`###### ARROW + CALLBACKS FUNCTIONS DEFINITIONS ######`)
let globalArrowFunction = (id, callbackPositiveArrow, callbackNegativeArrow) => {
    if (id >= 0) {
        return callbackPositiveArrow(id);
    } else {
        return callbackNegativeArrow(id);
    }
};

let callbackPositiveArrow = (id) => {
    let result = `[Arrow Function] The ${id} number is possitive`;
    return result;
};

let callbackNegativeArrow = (id) => {
    let result = `[Arrow Function] The ${id} number is negative`;
    return result;
};

console.log(`${globalArrowFunction(-19, callbackPositiveArrow, callbackNegativeArrow)}`)