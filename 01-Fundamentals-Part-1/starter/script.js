// let js = 'amazing';
// console.log(40+8+23-10);

// console.log("Jonas");

// let firstName = "Bob";
// console.log(firstName);

// !Number, String, Boolean,
// !Undefined, Null, Symbol(ES2015), BigInt(ES2020)
// !Dynamic Typing

// let javascriptIsFun = true;
// // console.log(javascriptIsFun);
// console.log(typeof javascriptIsFun);
// // console.log(typeof 23);
// // console.log(typeof 'Jonas');

// javascriptIsFun = 'YES!';
// console.log(typeof javascriptIsFun);

// let year;
// console.log(year);
// console.log(typeof year);

// year = 1991;
// console.log(typeof year);

// console.log(typeof null);

// let age = 30;
// age = 31;

// const birthYear = 1991;
// birthYear = 1990;
// const job;

// var job = 'programmer';
// job = 'teacher';
// !Learn the difference between them in section 7

// lastName = 'Schmedtmann';
// console.log(lastName);

// !Math Operators
// const now = 2037;
// const ageJonas = now - 1991;
// const ageSarah = now - 2018;

// const averageAge = (ageJonas + ageSarah) / 2;

// console.log(ageJonas, ageSarah, averageAge);

// console.log(ageJonas * 2, ageJonas / 10, 2 ** 3)
// // 2 ** 3  means 2 to the power of 3

// const firstName = 'Jonas';
// const lastName = 'Schmedtmann';
// console.log(firstName +' '+ lastName);

// !Assignment Operators
// let x = 10 + 5; //15
// x += 10; // x = x + 10 = 25
// x *= 4; // x = x * 4 = 100
// x++; // x = x + 1 = 101
// x--;
// console.log(x);

//! Comparision Operator
// console.log(ageJonas > ageSarah); // >, <, >=, <=

// console.log(now - 1991 > now - 2018);

// !mdn operator precedence

// let x, y;
// x = y = 25-10-5;
// console.log(x, y);

// Coding Challenge #1
// Mark and John are trying to compare their BMI (Body Mass Index), which is
// calculated using the formula:
// BMI = mass / height ** 2 = mass / (height * height) (mass in kg
// and height in meter).
// Your tasks:
// 1. Store Mark's and John's mass and height in variables
// 2. Calculate both their BMIs using the formula (you can even implement both
// versions)
// 3. Create a Boolean variable 'markHigherBMI' containing information about
// whether Mark has a higher BMI than John.
// Test data:
// § Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
// m tall.
// § Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
// m tall.

//const markWeight = 78, markHeight = 1.69, johnWeight = 92, johnHeight = 1.95;
/*const markWeight = 95, markHeight = 1.88, johnWeight = 85, johnHeight = 1.76;
const markBMI = markWeight/markHeight ** 2;
console.log("Mark BMI: " + markBMI)
const johnBMI = johnWeight/johnHeight ** 2;
console.log("John BMI: " + johnBMI)

const markBMIHigher = markBMI > johnBMI

if (markBMIHigher)
console.log("Mark has higher BMI than John")
else
console.log("John has higher BMI than Mark")*/

// const firstName = 'Jonas';
// const job = 'teacher';
// const birthYear = 1991;
// const age = 2037 - birthYear;

// const jonas = "I'm " + firstName + ", a " + age + " year old " + job + "!";
// console.log(jonas);

// !Template literals
// const jonasNew = `I'm ${firstName}, a ${age} year old ${job}!`;
// console.log(jonasNew);
// console.log(`Just a regurlar string....`);

// console.log('String with \n\
// multiple \n\
// lines');

// console.log(`String
// multiple
// lines`);

//! Controlled Structure
/*const age = 15;
if(age >= 18){
console.log(`Sarah can start driving license 🚗`);
}else{
    const yearsLeft = 18 - age;
    console.log(`Sarah is too yourg. Wait another ${yearsLeft} years :)`);
}

const birthYear = 2012;
let century;
if(birthYear <= 2000){
    century = 20;
} else {
    century = 21
}

console.log(century);*/

/*const markWeight = 78, markHeight = 1.69, johnWeight = 92, johnHeight = 1.95;
//const markWeight = 95, markHeight = 1.88, johnWeight = 85, johnHeight = 1.76;
const markBMI = markWeight/markHeight ** 2;
console.log("Mark BMI: " + markBMI)
const johnBMI = johnWeight/johnHeight ** 2;
console.log("John BMI: " + johnBMI)

if (markBMI > johnBMI){
console.log(`Mark's BMI (${markBMI}) is higher than John's (${johnBMI})!`)
} else {
console.log(`John's BMI (${johnBMI}) is higher than Mark's (${markBMI})!`)
}*/

//! Type conversion
/*const inputYear = '1991'
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number('Jonas'));
console.log(typeof NaN);

console.log(String(23), 23);*/

//! Type Coercion
/*console.log('I am ' + 23 + ' years old');
console.log('23' - '10' - 3);
console.log('23' + '10' + 3);
console.log('23' * '2');
console.log('23' > '18');

let n = '1' + 1;
n = n - 1;
console.log(n);*/

//! 5 Falsy values: 0, '', undefined, null, NaN

/*console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Jonas'));
console.log(Boolean({}));
console.log(Boolean(''));

const money = 100;
if(money){
    console.log(`Don't spend it all ;)`);
} else {
    console.log(`You should get a job!`)
}

let height = 0;
if(height){
    console.log(`YAY! Height is defined`);
}else {
    console.log(`Height is UNDEFINED`);
}*/

//! Equality Operator

/*const age = '18';
if(age === 18) console.log(`You just became an adult (strict)`);
if(age == 18) console.log(`You just became an adult (loose)`);

const favourite = Number(prompt("What's your favourite number?"));
console.log(favourite);
console.log(typeof favourite);

if(favourite === 23) {
    console.log(`Cool! 23 is an amazing number!`);
} else if(favourite === 7) { 
    console.log(`7 is also a cool number`);
} else if(favourite === 9) {
    console.log(`9 is also a cool number`);
}
else {
    console.log(`Number is not 23 or 7 or 9`);
}

if(favourite !== 23){
    console.log(`Why not 23?`);
}*/

//! Boolean logic: AND, OR & Not Operators
//!Logical Operators

/*const hasDriversLicense = true;
const hasGoodVision = true;

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

const shouldDrive = hasDriversLicense && hasGoodVision;

// if(shouldDrive){
//     console.log(`Sarah is able to drive!`);
// } else {
//     console.log(`Someone else should drive....`);
// }

const isTired = false;
console.log(hasDriversLicense || hasGoodVision || isTired);

if(hasDriversLicense && hasGoodVision && !isTired){
    console.log(`Sarah is able to drive!`);
} else {
    console.log(`Someone else should drive....`);
}*/

//! Code Chanllange3

// There are two gymnastics teams, Dolphins and Koalas. They compete against each
// other 3 times. The winner with the highest average score wins a trophy!
// Your tasks:
// 1. Calculate the average score for each team, using the test data below
// 2. Compare the team's average scores to determine the winner of the competition,
// and print it to the console. Don't forget that there can be a draw, so test for that
// as well (draw means they have the same average score)
// 3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a
// team only wins if it has a higher score than the other team, and the same time a
// score of at least 100 points. Hint: Use a logical operator to test for minimum
// score, as well as multiple else-if blocks 😉
// 4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when
// both teams have the same score and both have a score greater or equal 100
// points. Otherwise, no team wins the trophy
// Test data:
// § Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
// § Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
// § Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106

// const dolphinsScore1 = 96;
// const dolphinsScore2 = 108;
// const dolphinsScore3 = 89;
// const avgDolphinsScore = (dolphinsScore1 + dolphinsScore2 + dolphinsScore3)/3;

// const koalasScore1 = 88;
// const koalasScore2 = 91;
// const koalasScore3 = 110;
// const avgkoalassScore = (koalasScore1 + koalasScore2 + koalasScore3)/3;

// if (avgDolphinsScore > avgkoalassScore){
//     console.log(`Dophins with avg. score ${avgDolphinsScore} win over koalas with avg. score ${avgkoalassScore} `);
// } else if (avgkoalassScore > avgDolphinsScore){
//     console.log(`Koalas with avg. score ${avgkoalassScore} win over Dolphins with avg. score ${avgDolphinsScore}`);
// } else {
//     console.log(`Competion was drawn as both has the same avg. score ${avgDolphinsScore}`);
// }

/*const avgDolphinsScore = (97 + 112 + 81)/3;
const avgkoalassScore = (109 + 95 + 86)/3;
if (avgDolphinsScore > avgkoalassScore &&  avgDolphinsScore >= 100){
    console.log(`Dophins with avg. score ${avgDolphinsScore} win over koalas with avg. score ${avgkoalassScore} `);
} else if (avgkoalassScore > avgDolphinsScore &&  avgkoalassScore >= 100){
    console.log(`Koalas with avg. score ${avgkoalassScore} win over Dolphins with avg. score ${avgDolphinsScore}`);
} else if(avgkoalassScore === avgDolphinsScore && avgkoalassScore >= 100 &&  avgDolphinsScore >= 100) {
    console.log(`Competion was drawn as both has the same avg. score ${avgDolphinsScore}`);
} else {
    console.log(`No one won the trophy :)`);
}*/

//! The Swithch Statement

/*const day = "Wednesday";

switch (day) {
  case "Monday":
    console.log("Plan course structure");
    console.log("Go to coding meetup");
    break;
  case "Tuesday":
    console.log("Prepare theory videos");
    break;
  case "Wednesday":
  case "Thursday":
    console.log("Prepare theory videos");
    break;
  case "Friday":
    console.log("Record Videos");
    break;
  case "Saturday":
  case "Sunday":
    console.log("Enjoy the weekned");
    break;
  default:
    console.log("Not a valid day!");
}

if (day === "Monday") {
  console.log("Plan course structure");
  console.log("Go to coding meetup");
} else if (day === "Tuesday") {
  console.log("Prepare theory videos");
} else if (day === "Wednesday" || day === "Thursday") {
  console.log("Prepare theory videos");
} else if (day === "Friday") {
  console.log("Record Videos");
} else if (day === "Saturday" || day === "Sunday") {
  console.log("Enjoy the weekned");
} else {
  console.log("Not a valid day!");
}*/

//! Statements and Expression

//! The Conditional (Ternary) Operator

/*const age = 15;
age >= 18
  ? console.log(`I like to drink wine 🍷 `)
  : console.log(`I like to drink water 💧`);

const drink = age >= 18 ? `wine 🍷 ` : `water 💧`;
console.log(drink);

console.log(`I like to drink ${drink}`);*/

//! Code Chanllagne 4
// Steven wants to build a very simple tip calculator for whenever he goes eating in a
// restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and
// 300. If the value is different, the tip is 20%.
// Your tasks:
// 1. Calculate the tip, depending on the bill value. Create a variable called 'tip' for
// this. It's not allowed to use an if/else statement 😅 (If it's easier for you, you can
// start with an if/else statement, and then try to convert it to a ternary
// operator!)
// 2. Print a string to the console containing the bill value, the tip, and the final value
// (bill + tip). Example: “The bill was 275, the tip was 41.25, and the total value
// 316.25”
// Test data:
// § Data 1: Test for bill values 275, 40 and 430
// Hints:
// § To calculate 20% of a value, simply multiply it by 20/100 = 0.2
// § Value X is between 50 and 300, if it's >= 50 && <= 300 😉

//const bill = 275;
//const bill = 40;
/*const bill = 430;
const tip = bill >= 50 && bill <= 300 ? bill * (15 / 100) : bill * (20 / 100);
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value
${bill + tip}`);*/
