// Remember, we're gonna use strict mode in all scripts now!
'use strict';

// const x = 23;
// if (x === 23) console.log(23);

//? Codewars

//const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// 1) Understanding the problem.
//What is the temp amplitude? Answer: difference between highest and lowest temp
//How do we compute max an min temperatures?
//What's a sensor error? And what do we do?

// 2) Breaking up into sub-problems
// How to ignore errors?
// Find max value in temp array
// Find min value in temp array
// Subtact min rom max (amplitude) and return it

/*const calcTempAmplitude = function (temps) {
  let max = temps[0];
  let min = temps[0];

  for (let i = 1; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') continue;

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};

const amplitude = calcTempAmplitude(temperatures);
console.log(amplitude);
*/
// PROBLEM 2: Function should now receive 2 arrays of temps

// 1) Understanding the problem
// with 2 array, Shoud we implement functionality twice? No! Just merge two arrays

// 2) Breaking up into sub-problems
// --Merge 2 arrays

/*const calcTempAmplitudeNew = function (t1, t2) {
  const temps = t1.concat(t2);
  console.log(temps);

  let max = temps[0];
  let min = temps[0];

  for (let i = 1; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') continue;

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};

const amplituedeNew = calcTempAmplitudeNew([3, 5, 1], [9, 0, 5]);
console.log(amplituedeNew);*/

//! Debugging
//! Debugging with console and breakpoints

/*const measureKelvin = function () {
  const measurement = {
    type: 'temp',
    unit: 'cels',

    //c)Fix

    value: Number(prompt('Degress celsius:')),
  };

  // B) Find
  console.table(measurement);

  //  console.log(measurement.value);
  //console.warn(measurement.value);
  //console.error(measurement.value);
  const kelvin = measurement.value + 273;
  return kelvin;
};

//A) IDENTIFY
console.log(measureKelvin());*/

// Coding Challenge #1
// Given an array of forecasted maximum temperatures, the thermometer displays a
// string with the given temperatures. Example: [17, 21, 23] will print "... 17ºC in 1
// days ... 21ºC in 2 days ... 23ºC in 3 days ..."
// Your tasks:
// 1. Create a function 'printForecast' which takes in an array 'arr' and logs a
// string like the above to the console. Try it with both test datasets.
// 2. Use the problem-solving framework: Understand the problem and break it up
// into sub-problems!
// Test data:
// § Data 1: [17, 21, 23]
// § Data 2: [12, 5, -5, 0, 4]

//const temperatures = [17, 21, 23];

const logTemperatues = temperatues => {
  let printString = ``;
  for (let i = 0; i < temperatues.length; i++) {
    const curTemp = temperatues[i];
    printString += `...${temperatues[i]} ºC in ${i}days `;
  }
  return printString;
};

console.log(logTemperatues([17, 21, 23]));
console.log(logTemperatues([12, 5, -5, 0, 4]));
