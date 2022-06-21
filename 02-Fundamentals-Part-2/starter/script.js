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

const ages = [
  calcAge(years[0]),
  calcAge(years[1]),
  calcAge(years[2]),
  calcAge(years[3]),
  calcAge(years[4]),
];
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

//////////////////// Objects have properties
//object literal syntax
const jonas = {
  firstName: 'Jonas',
  birthYear: 1991,
  hobbies: ['Sports', 'Cooking'],
  address: {
    city: 'Berlin',
    country: 'Germany',
  },
  friends: ['Jane', 'Mike', 'Mary'],
  license: false,
  calcAge: function () {
    this.age = 2037 - this.birthYear;
    return this.age;
  },
  getSummary: function () {
    return `${this.firstName} is ${this.calcAge()} years old, lives in ${
      this.location
    } and he ${this.license ? 'has' : 'does not have'} a license`;
  },
};
console.log(jonas['address']);
const nameKey = 'Name';
console.log(jonas['first' + nameKey]);

/*const property = prompt('Enter a property name');

if (jonas[property]) {
  console.log(jonas[property]);
} else {
  console.log('Property not found');
}*/

jonas.location = 'Berlin';
jonas['telephone'] = '123456789';
console.log(jonas);

const phrase = `${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`;
console.log(phrase);
//jonas.calcAge();
console.log(jonas.age);
//console.log(jonas['calcAge']());

console.log(jonas.getSummary());

const jonasArray = [
  'Jonas',
  'Berlin',
  2037 - 1991,
  'Sports',
  ['Jane', 'Mike', 'Mary'],
  false,
  '2020',
];

let jonasTypes = [];
console.log('------ STRINGS --------');
for (let i = 0; i < jonasArray.length; i++) {
  if (typeof jonasArray[i] !== 'string') continue;
  console.log(jonasArray[i], typeof jonasArray[i]);
  //jonasTypes[i] = typeof jonasArray[i];
  jonasTypes.push(typeof jonasArray[i]);
}

console.log(jonasTypes);

console.log('------ BREAK with number --------');
for (let i = 0; i < jonasArray.length; i++) {
  if (typeof jonasArray[i] === 'number') break;
  console.log(jonasArray[i], typeof jonasArray[i]);
}

const years2 = [1990, 1991, 1992, 1993, 1994];
const ages2 = [];
for (let i = 0; i < years2.length; i++) {
  ages2.push(2037 - years2[i]);
}

console.log('------ Backwards --------');
for (let i = jonasArray.length - 1; i >= 0; i--) {
  console.log(jonasArray[i]);
}

console.log('------ Loop in Loop --------');
for (let exercise = 1; exercise < 4; exercise++) {
  console.log(`Starting Exercise ${exercise}`);
  for (let set = 1; set <= 4; set++) {
    console.log(`Exercise ${exercise}: Set ${set}`);
  }
}

console.log('------ While Loop --------');
let counter = 0;
while (counter <= 3) {
  console.log(`Counter is at ${counter}`);
  counter++;
}

let dice = Math.trunc(Math.random() * 6) + 1;
while (dice !== 6) {
  console.log(`Dice is at ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6) {
    console.log('Dice is at 6, loop is ending');
  }
}
