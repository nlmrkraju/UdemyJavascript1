"use strict";
/*let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log(`I can drive`);

//const interface = "Audio";
//const private = 534;
//const if = 23;*/

//! Funcitons
//! {} Function body
// function logger() {
//   console.log("My name is Jonas");
// }

//! Invoking or Running or Calling the funciton
/*logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
  console.log(apples, oranges);
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);*/

//! Parameter
//! Funciton Declaration
// function calcAge1(birthYear) {
//   return 2037 - birthYear;
// }

//! Argument
// const age1 = calcAge1(1991);

//! Funciton Expression
// const calcAge2 = function (birthYear) {
//   return 2037 - birthYear;
// };

// const age2 = calcAge2(1991);

// console.log(age1, age2);

//! Arrow Funciton --> Return happens implicitly
/*const calcAge3 = (birthYear) => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetiremnt = (birthYear, firstName) => {
  const age = 2037 - birthYear;
  const retirment = 65 - age;
  //return retirment;
  return `${firstName} retires in ${retirment}`;
};

console.log(yearsUntilRetiremnt(1991, "Jonas"));*/

//! Funcitons calling other funcitons

/*function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);

  const juice = `Juice with ${applePieces} pieces of apples and ${orangePieces} pieces of oranges.`;
  return juice;
}

console.log(fruitProcessor(2, 3));*/

//! Reviewing Functions

/*const calcAge = function (birthYear) {
  return 2037 - birthYear;
};

const yearsUntilRetiremnt = function (birthYear, firstName) {
  const age = calcAge(birthYear);
  const retirment = 65 - age;

  if (retirment > 0) {
    console.log(`${firstName} retires in ${retirment}`);
    return retirment;
  } else {
    console.log(`${firstName} has already retired 🎉`);
    return -1;
  }

  //
};

console.log(yearsUntilRetiremnt(1991, "Jonas"));
console.log(yearsUntilRetiremnt(1950, "Mike"));*/

//! Function Declaration
//! Funciton Expression
//! Arrow Function

// Coding Challenge #1
// Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new
// gymnastics discipline, which works differently.
// Each team competes 3 times, and then the average of the 3 scores is calculated (so
// one average score per team).
// A team only wins if it has at least double the average score of the other team.
// Otherwise, no team wins!
// Your tasks:
// 1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
// 2. Use the function to calculate the average for both teams
// 3. Create a function 'checkWinner' that takes the average score of each team
// as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner
// to the console, together with the victory points, according to the rule above.
// Example: "Koalas win (30 vs. 13)"
// 4. Use the 'checkWinner' function to determine the winner for both Data 1 and
// Data 2
// 5. Ignore draws this time
// Test data:
// § Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
// § Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27
// Hints:
// § To calculate average of 3 values, add them all together and divide by 3
// § To check if number A is at least double number B, check for A >= 2 * B.
// Apply this to the team's average scores 😉

// const dolphinsScore1 = 44;
// const dolphinsScore2 = 23;
// const dolphinsScore3 = 71;

const dolphinsScore1 = 85;
const dolphinsScore2 = 54;
const dolphinsScore3 = 41;

// const koalasScore1 = 65;
// const koalasScore2 = 54;
// const koalasScore3 = 49;

const koalasScore1 = 23;
const koalasScore2 = 34;
const koalasScore3 = 27;

const calcAverage = (value1, value2, value3) => (value1 + value2 + value3) / 3;

const avgDolphins = calcAverage(dolphinsScore1, dolphinsScore2, dolphinsScore3);
const avgKoalas = calcAverage(koalasScore1, koalasScore2, koalasScore3);

const checkWinner = function (avgTeam1, avgTeam2) {
  if (avgTeam1 >= avgTeam2 * 2) {
    console.log(`Dolphins win 🏆 (${avgDolphins} vs ${avgKoalas})`);
  } else if (avgTeam2 >= avgTeam1 * 2) {
    console.log(`Koalas win 🏆 (${avgKoalas} vs ${avgDolphins})`);
  } else {
    console.log(`No one won.`);
  }
};

checkWinner(avgDolphins, avgKoalas);
