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

const markWeight = 78, markHeight = 1.69, johnWeight = 92, johnHeight = 1.95;
//const markWeight = 95, markHeight = 1.88, johnWeight = 85, johnHeight = 1.76;
const markBMI = markWeight/markHeight ** 2;
console.log("Mark BMI: " + markBMI)
const johnBMI = johnWeight/johnHeight ** 2;
console.log("John BMI: " + johnBMI)

if (markBMI > johnBMI){
console.log(`Mark's BMI (${markBMI}) is higher than John's (${johnBMI})`)
} else {
console.log(`John's BMI (${johnBMI}) is higher than Mark's (${markBMI})`)
}

