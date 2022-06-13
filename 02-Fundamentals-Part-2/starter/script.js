'use strict';

// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) hasDriverLicense = true;
// if (hasDriversLicense) console.log('You are allowed to drive');

function logger(){
    console.log('Hello World');
}

//calling / running / invoking the function
logger();

function fruitProcessor(apples, oranges){
    const juice = `Juice with ${apples} apples and ${oranges} oranges`;
    return juice;
}

const result = fruitProcessor(5, 0);
console.log(result);
console.log(fruitProcessor(3, 2));

//Function declaration, can be called before it is defined
function add(a, b){
    return a + b;
}

//Function expression, can be called after it is defined
const add = function(a, b){
    return a + b;
}