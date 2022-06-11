let js = 'amazing';
// console.log(48 + 8 + 23 - 10);

// console.log(firstName);

let myFirstJob = 'Web Developer';
let $myCurrentJob = 'Web Developer';

//The 7 primitive data types that JavaScript supports are:
//Number let myAge = 30;
//String let myName = "Jonas";
//Boolean let isMarried = false;
//Undefined value taken by a variable that is not yet defined (empty value) let myJob;
//Null also means empty value let myJob = null;
//Symbol (ES2015): Value that is unique and cannot be changed, let myJob = Symbol("Web Developer");
//BigInt (ES2020): Larger integers than Number type can't hold, let myAge = BigInt(30);

//In JavaScript, value has type, not variable

// let javascriptIsFun = true;
// console.log(javascriptIsFun);
// console.log(typeof javascriptIsFun);
// javascriptIsFun = 100;
// console.log(typeof javascriptIsFun);
// let isUndefined;
// console.log(isUndefined);
// isUndefined = "Hello";
// console.log(typeof isUndefined);
// console.log(typeof null);

// const birthYear = 1990;
// var job = "Web Developer"; //old way
// job = "Software Engineer";
// secondName = "John";
// console.log(birthYear, job, secondName);

//Operators
//Allows to transform values or combine values to create new values

//Arithmetic Operators
// const currentYear = 2037;
// const ageJonas = currentYear - 1991;
// const ageJohn = currentYear - 2018;
// console.log(ageJonas, ageJohn);
// console.log(ageJonas * 2, ageJonas / 2, 2 ** 3);
// // 2 ** 3 = 2 * 2 * 2 = 8
// const firstName = "John";
// const lastName = "Doe";
// const fullName = firstName + " " + lastName;
// console.log(fullName);

//Asignment operators
// let x = 10 + 5;
// x+= 10;
// x++;
// x--;
// x*= 2;
// x/= 2;
// console.log(x);

// //Comparison operators
// console.log(ageJonas > ageJohn);
// console.log(ageJohn >= 20);

// const currentYear = 2037;
// const ageJonas = currentYear - 1991;
// const ageJohn = currentYear - 2018;
// console.log(currentYear - 1991 > currentYear - 2018);

// console.log(`String with
//  multiple
//  lines`)
// const age = 15;
// const isOldEnough = age >= 18;
// if (isOldEnough) {
//     console.log("You are old enough to drink");
// }

//Type converstion

// const age = "15";
// console.log(Number(age) + 1);
// console.log(Number("Jonas"));
// console.log(String(23), 23);
// console.log(typeof null);

// //Type coercion
// console.log('I am ' + 23 + ' years old');
// console.log("23" - "10");
// console.log("23" * "10");

//5 Falsy values in JavaScript: undefined, null, 0, "", NaN
//Anything else is truthy
// console.log(Boolean(undefined));
// console.log(Boolean(null));
// console.log(Boolean(0));
// console.log(Boolean(""));
// console.log(Boolean(" "));
// console.log(Boolean(NaN));
// console.log(Boolean(Infinity));
// console.log(Boolean(2));
// console.log(Boolean({}));

console.log('****************');
const day = 'Sunday';

switch (day) {
  case 'Monday':
    console.log("It's Monday");
    break;
  case 'Tuesday':
    console.log("It's Tuesday");
    break;
  case 'Wednesday':
  case 'Thursday':
    console.log("It's Wednesday o Thursday");
    break;
  case 'Friday':
    console.log("It's Friday");
    break;
  case 'Saturday':
    console.log("It's Saturday");
    break;
  case 'Sunday':
    console.log("It's Sunday");
    break;
  default:
    console.log("It's not a day");
    break;
}

if (day === 'Monday') {
  console.log("It's Monday");
} else if (day === 'Tuesday') {
  console.log("It's Tuesday");
} else if (day === 'Wednesday' || day === 'Thursday') {
  console.log("It's Wednesday or Thursday");
} else if (day === 'Friday') {
  console.log("It's Friday");
} else if (day === 'Saturday' || day === 'Sunday') {
  console.log("It's Saturday or Sunday");
} else {
  console.log("It's not a day");
}

console.log('****************');


function wordParser(sentence) {
    const words = sentence.split(" ");
    const separators = sentence.match(/[a-z]\s|[a-z]\W([a-z]*\s)|[a-z]\W/g);
    const newWords = words.map((word,index) => {
      const firstLetter = word.charAt(0); 
      const lastLetter = separators[index];
      const lastIndex = (lastLetter.charAt(lastLetter.length -1) === ' ' ? lastLetter.length - 1 : lastLetter.length) * -1;
      const distinctChars = word.slice(1,lastIndex).split('').reduce((acc, curr)=>{
        if(!acc.includes(curr)){
          acc.push(curr); 
        }
        return acc;
      }, [])
      return firstLetter + (distinctChars.length ? distinctChars.length : '')  + lastLetter;
    });
    return newWords.join("");  
  }
  
  var output = wordParser("Creativity is thinking-up new things. Innovation is doing new things!");
  console.log(output);