// Given an array of forecasted maximum temperatures, the thermometer displays a 
// string with the given temperatures. Example: [17, 21, 23] will print "... 17ºC in 1 
// days ... 21ºC in 2 days ... 23ºC in 3 days ..." 
// Your tasks: 
// 1. Create a function 'printForecast' which takes in an array 'arr' and logs a 
// string like the above to the console. Try it with both test datasets. 
// 2. Use the problem-solving framework: Understand the problem and break it up 
// into sub-problems!

//1) Understanding the problem
// - What is the input? Answer: an array of temperatures
// - What is the output? Answer: a string with the temperatures
// - do we need a loop? Answer: no
// - how to concatenate strings? Answer: use the + operator

//2) Breaking up into sub-problems
// - Create the function structure
// - Create a string with the temperatures
// - Return the string

const printForecast = (arrTemps) => {
    let str = '... ';
    for (let i = 0; i < arrTemps.length; i++) {
        str += `${arrTemps[i]}ºC in ${i+1} days ... `
    }
    return str;
}

const resultData1 = printForecast([17, 21, 23]);
const resultData2 = printForecast([12, 5, -5, 0, 4]);
console.log(resultData1);
console.log(resultData2);
