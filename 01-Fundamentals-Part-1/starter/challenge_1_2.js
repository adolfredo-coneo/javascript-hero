/*JavaScript Fundamentals – Part 1 

Coding Challenge #1 
Mark and John are trying to compare their BMI (Body Mass Index), which is 
calculated using the formula: 
BMI = mass / height ** 2 = mass / (height * height) (mass in kg 
and height in meter). 
Your tasks: 
1. Store Mark's and John's mass and height in variables 
2. Calculate both their BMIs using the formula (you can even implement both 
versions) 
3. Create a Boolean variable 'markHigherBMI' containing information about 
whether Mark has a higher BMI than John. 
Test data: 
§ Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 
m tall. 
§ Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 
m tall.*/

const markWeight = 95;
const markHeight = 1.88;
const johnWeight = 85;
const johnHeight = 1.76;

const marksBMI = markWeight / (markHeight * markHeight);
const johnsBMI = johnWeight / (johnHeight * johnHeight);

const markHigherBMI = marksBMI > johnsBMI;

console.log(marksBMI, johnsBMI);
console.log(`Is Mark's BMI higher than John's? ${markHigherBMI}`);

/*
Coding Challenge #2 
Use the BMI example from Challenge #1, and the code you already wrote, and 
improve it. 
Your tasks: 
1. Print a nice output to the console, saying who has the higher BMI. The message 
is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!" 
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's 
BMI (28.3) is higher than John's (23.9)!" 
Hint: Use an if/else statement 😉
*/

if (marksBMI > johnsBMI) {
  console.log(`Mark's BMI (${marksBMI}) is higher than John's (${johnsBMI})!`);
} else if (marksBMI < johnsBMI) {
  console.log(`John's BMI (${johnsBMI}) is higher than Mark's (${marksBMI})!`);
} else {
  console.log(`Both BMI's (${johnsBMI}) are equal!`);
}
