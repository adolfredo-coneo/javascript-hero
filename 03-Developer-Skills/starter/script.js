// Remember, we're gonna use strict mode in all scripts now!
'use strict';

//npm install live-server -g

// PROBLEM 1:
// We work for a company building a smart home thermometer. Our most recent task is this: "Given an array of temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error."

const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];
const temperatures2 = [5, -2, -9, -1, 'error', 9, 13, 20, 15, 14, 9, 'error'];

//1) Understanding the problem
// - what is temperature amplitude? Answer: the difference between the highest and lowest temperature
// - How to compute max and min temperatures?
// - What's a sensor error? and what to do?

//2) Breaking up into sub-problems
//- How to ignore errors?
// - Find max value in temp array
// - Find min value in temp array
// - Substract min from max (amplitude) and return it

const calcTempAmplitude = (tempArray1, tempArray2) => {
  const mergedArray = [...tempArray1, ...tempArray2];
  let max = mergedArray[0];
  let min = mergedArray[0];
  for (let i = 1; i < mergedArray.length; i++) {
    const currTemp = mergedArray[i];
    if (typeof currTemp !== 'number') continue;
    if (currTemp > max) {
      max = currTemp;
    }
    if (currTemp < min) {
      min = currTemp;
    }
  }
  return max - min;
};


// PROBLEM 2:
// Function should receive 2 arrays of temps

//1) Understanding the problem
// - With 2 arrays, should we implement functionality twice? Answer: noe, just merge two arrays.

//2) Breaking up into sub-problems
//- How to merge 2 arrays?

const amplitude = calcTempAmplitude(temperatures, temperatures2);
console.log(amplitude);
