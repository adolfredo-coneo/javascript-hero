'use strict';

// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) hasDriverLicense = true;
// if (hasDriversLicense) console.log('You are allowed to drive');

function logger() {
  console.log('Hello World');
}

//calling / running / invoking the function
logger();

function fruitProcessor(apples, oranges) {
  const juice = `Juice with ${apples} apples and ${oranges} oranges`;
  return juice;
}

const result = fruitProcessor(5, 0);
console.log(result);
console.log(fruitProcessor(3, 2));

//Function declaration, can be called before it is declared
function add(a, b) {
  return a + b;
}

//Function expression, can be called after it is declared
const add2 = function (a, b) {
  return a + b;
};
//arrow functions, has no this keyword
const add3 = (a, b) => a + b;

const cutFruitPieces = (fruit) => fruit * 4;

function fruitProcessor2(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);

  const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange`;
  return juice;
}
console.log(fruitProcessor2(3, 2));

const calcAge = function (birthYear) {
  return 2037 - birthYear;
};

const yearsUntilRetirement = function (birthYear, firstName) {
  const age = calcAge(birthYear);
  const retirement = 65 - age;

  if (retirement > 0) {
    return retirement;
  } else {
    return -1;
  }
};

console.log(yearsUntilRetirement(1991, 'John'));
console.log(yearsUntilRetirement(1950, 'Mike'));

//Expressions and Statements
//Expression - something that produces a value
//Statement - something that does something

//Arrays
const numbers = [1, 2, 3, 4, 5];
const numbers2 = new Array(1, 2, 3, 4, 5);
const years = [1990, 1991, 1992, 1993, 1994];

console.log(calcAge(years[0]));
console.log(calcAge(years[1]));

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[2]), calcAge(years[3]), calcAge(years[4])];
console.log(ages);

const friends = ['John', 'Mike', 'Jane', 'Mary'];
const newLength = friends.push('Bob');

console.log(friends, newLength);

friends.unshift('Jane');
console.log(friends);

//Remove elements
const popped = friends.pop(); //Last
console.log(friends, popped);

friends.shift(); //First
console.log(friends);

console.log(friends.indexOf('Mike'));

console.log(friends.includes('Mike'));

