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

/*// const dolphinsScore1 = 44;
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

checkWinner(avgDolphins, avgKoalas);*/

//! Introduciton to Arrays
/*const friends = ["Michael", "Steven", "Peter"];
console.log(friends);

// const years = new Array(1991, 1984, 2008, 2020);
// console.log(years);

//? Arrays are zero based.
console.log(friends[0]);
console.log(friends[1]);

console.log(friends.length);
//? Can put expressions inside []
console.log(friends[friends.length - 1]);

//? Can mutate arrarys even tought they declared with const
friends[2] = "Jay";
console.log(friends);

const calcAge = function (birthYear) {
  return 2037 - birthYear;
};

const years = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [
  calcAge(years[0]),
  calcAge(years[1]),
  calcAge(years[years.length - 1]),
];
console.log(ages);*/

//! Basic Array Operations(Methods)
/*//? Push Method
const friends = ["Michael", "Steven", "Peter"];
const newLength = friends.push("Jay");
console.log(friends);
console.log(newLength);

//? Unshift Method
friends.unshift("John");
console.log(friends);

//? Pop Mehtod
const popped = friends.pop();
console.log(friends);
console.log(popped);

//? Shift Method
friends.shift();
console.log(friends);

//?IndexOf
console.log(friends.indexOf("Steven"));
console.log(friends.indexOf("Bob"));

//? Includes --> Checks with strict equality doesn't do type coercion
console.log(friends.includes("Steven"));
console.log(friends.includes("Bob"));*/

// Coding Challenge #2
// Steven is still building his tip calculator, using the same rules as before: Tip 15% of
// the bill if the bill value is between 50 and 300, and if the value is different, the tip is
// 20%.
// Your tasks:
// 1. Write a function 'calcTip' that takes any bill value as an input and returns
// the corresponding tip, calculated based on the rules above (you can check out
// the code from first tip calculator challenge if you need to). Use the function
// type you like the most. Test the function using a bill value of 100
// 2. And now let's use arrays! So create an array 'bills' containing the test data
// below
// 3. Create an array 'tips' containing the tip value for each bill, calculated from
// the function you created before
// 4. Bonus: Create an array 'total' containing the total values, so the bill + tip
// Test data: 125, 555 and 44
// Hint: Remember that an array needs a value in each position, and that value can
// actually be the returned value of a function! So you can just call a function as array
// values (so don't store the tip values in separate variables first, but right in the new
// array) 😉

//const bill = 275;
//const bill = 40;
//const bill = 430;

/*const calcTip = (bill) => {
  return bill >= 50 && bill <= 300 ? bill * (15 / 100) : bill * (20 / 100);
};
console.log(calcTip(100));

const bills = [125, 555, 44];
console.log(bills);
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
console.log(tips);
const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log(total);*/

//! Objects
//? Define key value pairs

//? This is Object literal syntax, Order we specify the elements doesn't matter comparing to arrys.
/*const jonas = {
  firstName: "Jonas",
  lastName: "Schmedtmann",
  age: 2037 - 1991,
  job: "teacher",
  firends: ["Michael", "Steven", "Peter"],
};

//! Dot and Bracket Notation
//? Dot Notation
console.log(jonas.lastName);

//? Bracket Notation --> We can put an expression inside a [] bracket
console.log(jonas["lastName"]);
const nameKey = "Name";
console.log(jonas["first" + nameKey]);
console.log(jonas["last" + nameKey]);*/

/*const interestedIn = prompt(
  "What do you want to know about Jonas. Choose between firtName, lastName, age, job and friends"
);

if (jonas[interestedIn]) {
  console.log(jonas[interestedIn]);
} else {
  console.log(
    `Wrong requiest! Choose between firtName, lastName, age, job and friends`
  );
}*/

//? Adding new properties to the object

/*jonas.location = "Portugal";
jonas["twitter"] = "@jonasschmedtman";
console.log(jonas);

console.log(
  `${jonas.firstName} has ${jonas.firends.length} friends, and his best firend is called ${jonas.firends[0]}`
);*/

//! Object Methods
//? Function expressions as funciton value can be created not funciton declarations with properties.
/*const jonas = {
  firstName: "Jonas",
  lastName: "Schmedtmann",
  birthYear: 1991,
  job: "teacher",
  firends: ["Michael", "Steven", "Peter"],
  hasDriversLicense: true,

  // calcAge: function (birthYear) {
  //   return 2037 - birthYear;
  // },

  // calcAge: function () {
  //   console.log(this);
  //   return 2037 - this.birthYear;
  // },

  calcAge: function () {
    this.age = 2037 - this.birthYear;
    return this.age;
  },

  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()} years ${
      this.job
    }, and he has ${this.hasDriversLicense ? "a" : "no"} driver's license`;
  },
};

console.log(jonas.calcAge());
console.log(jonas.age);
//console.log(jonas["calcAge"](1991));

console.log(jonas.getSummary());
*/

// Coding Challenge #3
// Let's go back to Mark and John comparing their BMIs! This time, let's use objects to
// implement the calculations! Remember: BMI = mass / height ** 2 = mass
// / (height * height) (mass in kg and height in meter)
// Your tasks:
// 1. For each of them, create an object with properties for their full name, mass, and
// height (Mark Miller and John Smith)
// 2. Create a 'calcBMI' method on each object to calculate the BMI (the same
// method on both objects). Store the BMI value to a property, and also return it
// from the method
// 3. Log to the console who has the higher BMI, together with the full name and the
// respective BMI. Example: "John's BMI (28.3) is higher than Mark's (23.9)!"
// Test data: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m
// tall.

//let calcBMI = (mass, height) => mass/(height ** 2);

/*const mark = {
  name: "Mark Smith",
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.bMI = this.mass / this.height ** 2;
    return this.bMI;
  },
};

const john = {
  name: "John Miller",
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.bMI = this.mass / this.height ** 2;
    return this.bMI;
  },
};

console.log(mark.calcBMI());
console.log(john.calcBMI());

if (mark.bMI > john.bMI) {
  console.log(
    `${mark.name}'s BMI (${mark.bMI}) is higher than ${john.name}'s BMI (${john.bMI}) `
  );
} else if (john.bMI > mark.bMI) {
  console.log(
    `${john.name}'s BMI (${john.bMI}) is higher than ${mark.name}'s BMI (${mark.bMI}) `
  );
}*/

//! The for Loop
//? Automate repetative tasks

/*for (let rep = 1; rep <= 10; rep++) {
  console.log(`Lifthing weights repetitin ${rep} 🏋️‍♂️`);
}*/

//! Looping Arrays, Breaking and Continuing
/*const jonas = [
  "Jonas",
  "Schmedtmann",
  2037 - 1991,
  "teacher",
  ["Michael", "Steven", "Peter"],
  true,
];

const types = [];

for (let i = 0; i < jonas.length; i++) {
  //? Reading from jonas array
  console.log(jonas[i], typeof jonas[i]);

  //? Filling types Array
  //types[i] = typeof jonas[i];
  types.push(typeof jonas[i]);
}

console.log(types);

const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
  ages.push(2037 - years[i]);
}
console.log(ages);

//? Continue and Break
console.log("---- ONLY STRINGS ----");
for (let i = 0; i < jonas.length; i++) {
  //? Reading from jonas array
  if (typeof jonas[i] !== "string") continue;
  console.log(jonas[i], typeof jonas[i]);

  //? Filling types Array
  //types[i] = typeof jonas[i];
  //types.push(typeof jonas[i]);
}

console.log("---- BREAK WITH NUMBER ----");
for (let i = 0; i < jonas.length; i++) {
  if (typeof jonas[i] === "number") break;
  console.log(jonas[i], typeof jonas[i]);
}*/

//! Looping Backward and loops in loops
/*const jonas = [
  "Jonas",
  "Schmedtmann",
  2037 - 1991,
  "teacher",
  ["Michael", "Steven", "Peter"],
];

for (let i = jonas.length - 1; i >= 0; i--) {
  console.log(jonas[i], typeof jonas[i]);
}

for (let excericse = 1; excericse < 4; excericse++) {
  console.log(`--------- Starting exercise ${excericse}  -----------`);
  for (let rep = 1; rep < 6; rep++) {
    console.log(`Lifting weight repetition ${rep} 🏋️‍♂️`);
  }
}*/

//! The While Loop

// let rep = 1;
// while (rep <= 10) {
//   console.log(`WHILE: Lifthing weights repetitin ${rep} 🏋️‍♂️`);
//   rep++;
// }

/*let dice = Math.trunc(Math.random() * 6) + 1;
console.log(dice);

while (dice !== 6) {
  console.log(`You rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6) console.log(`Loop is about to end...`);
}*/

// Let's improve Steven's tip calculator even more, this time using loops!
// Your tasks:
// 1. Create an array 'bills' containing all 10 test bill values
// 2. Create empty arrays for the tips and the totals ('tips' and 'totals')
// 3. Use the 'calcTip' function we wrote before (no need to repeat) to calculate
// tips and total values (bill + tip) for every bill value in the bills array. Use a for
// loop to perform the 10 calculations!
// Test data: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52
// Hints: Call ‘calcTip ‘in the loop and use the push method to add values to the
// tips and totals arrays 😉
// Bonus:
// 4. Bonus: Write a function 'calcAverage' which takes an array called 'arr' as
// an argument. This function calculates the average of all numbers in the given
// array. This is a difficult challenge (we haven't done this before)! Here is how to
// solve it:
// 4.1. First, you will need to add up all values in the array. To do the addition,
// start by creating a variable 'sum' that starts at 0. Then loop over the
// array using a for loop. In each iteration, add the current value to the
// 'sum' variable. This way, by the end of the loop, you have all values
// added together
// 4.2. To calculate the average, divide the sum you calculated before by the
// length of the array (because that's the number of elements)
// 4.3. Call the function with the 'totals' array

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
let tips = [];
let totals = [];

const calcTip = (bill) => {
  return bill >= 50 && bill <= 300 ? bill * (15 / 100) : bill * (20 / 100);
};

for (let i = 0; i < bills.length; i++) {
  let tip = calcTip(bills[i]);
  let total = bills[i] + tip;
  tips.push(tip);
  totals.push(total);
}

console.log(bills);
console.log(tips);
console.log(totals);

const calcAverage = (arrayValues) => {
  let total = 0;
  for (let i = 0; i < arrayValues.length; i++) {
    total += arrayValues[i];
  }
  let avg = total / arrayValues.length;
  console.log(avg);
};

calcAverage(totals);
