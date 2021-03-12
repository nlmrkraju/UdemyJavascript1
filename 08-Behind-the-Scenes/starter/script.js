'use strict';

//? High-Level
//? Garbage-collected
//? Interpreted or just-in-time compiled
//? Multi-Pardim ( Procedural, Object-Oriented(OOP) and Functional(FP)) (Inperative vs Declarative)
//? Prototype-base object-oriented
//? First-class functions --> Passing a function into another function as an argument : First Class Functions
//? Dynamic --> No data type definitons. Types becomes known at runtime. Data type of variable is automaticlly changed.

//? Single Threaded --> Concurrency model: how the javascript engine handles multiple tasks happening at the same time. Javascript runs in one single thread. so it can only do one thing at a time. Sounds like it would block the single thread. However, we want non-blocking behavoir! By using an "evnt loop": takes long running tasks, executes them in the "background", and puts them back in the main thread once they are finnshed.

//? Non-blocking event loop -->

//! Javascript Engine and Runtime
//? JS Engine: Program that executes javascript code.
//? Googles V8 Engine --> Powers google chrome and also node js
//? Compilation vs Interpretation
//? Compilation: Entire source code is converted into machine code at once and written to a binary file that can be executed by a computer.
//? Interpreatation: Interpreter runs through the source code and executes line by line.
//? Junt-in-time(JIT) compilation: Entire code is converted into machine code at once, then executed immediately.
//? AST --> Abstract Syntax Tree
//? Parsing --> Compilation --> Execution --> Optimization
//? Javascript Runtime --> Runtime in the Browser(Container including all the things that we need to use JavaScript(in this case the browser))
//? Engine, Web APIs(Functionality provided to the engine, accessible on window object), Callback Queue(Ex: Callback function from DOM event listner), Evet Loop (Essential for non-blocking concurrency model)

//! Execution contexts and the call stack
//? Compilation--> Global execution context(for top-levl code) -->
//? Execution Context --> Environment in which a piece of JavaScript is executed. Stores all the necessary informantion for some code to be executed.
//? Variable Environment, Scope Chain, this Keyword
//? Arrow functions does not have arguments object and this keyword
//? Call Stack --> Where exectuion contexts get stacked on top of each other, to keep track of where we are in the execution

//! Scope and the scope Chain
//? Scoping: How our program's variables are organized and accesseed. "Whare do variables live?" or "Where can we access a certain variable, and where not?"
//? Lexical Scoping: Scoping in controlled by placment of funcions and blocks in the code;
//? Scope: Space or environment in which a certain variable is declard(variableenvironment in case of functions). There is global scope, function scope, and block scope.
//? Scope of a variable: Region of our code where a certain varible can be accessed.
//? Global Scope, Function Scope(Local Scope), Block Scope(ES6)(if block, for loop block only applies to let and const variables)
//? Var is a funciton scoop

//! Scope chain Vs Call Stack
//? Scope Chain is the order in which functions are written in the code.(Has nothing to do with order in which functins were called)

//! Scoping in Practice

/*function calcAge(birthYear) {
  const age = 2037 - birthYear;

  function printAge() {
    let output = `${firstName}, you are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;
      //Creating NEW variable with sam ename as outer scope's variable
      const firstName = 'Steven';

      //Reassigning outer scope's variable
      const output = 'NEW OUTPUT';
      const str = `Oh, and you are a millenial, ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }
    }
    //console.log(str);
    console.log(millenial);
    //console.log(add(2, 3));
    console.log(output);
  }
  printAge();

  return age;
}

const firstName = 'Jonas';
calcAge(1991);
//console.log(age);
//printAge();*/

//! Variable Evniromnent: Hoisting and the TDZ
//? Variable Environment
//? Hoisting: Makes some types of variables accessible/usable in the code before they are actually declared. "Variables lifted to the top of their scope".
//? (BEHIND THE SCENES) Before execution, code is scanned for variable declarations, and for each variable, a new property is created in the variable environment object.
//? TDZ --> Temporal Dead Zone
//? Why TDZ --> Introduced in ES6 --> Makes it easier toavoid and catch errors: accessing variables before declaration is bad prctice and should be avoided. Makes const variables actually work.
//? Why Hoisting? --> Using functions before actual declaration; var hoisting is just a byproduct.

//! Hoisitng and TDZ in Practice
/*
//? Variables
console.log(me);
//console.log(job);
//console.log(year);

var me = 'Jonas';
let job = 'teacher';
const year = 1991;

//? Funcitons
console.log(addDecl(2, 3));
//console.log(addExpr(2, 3));
//console.log(addArrow(2, 3));

function addDecl(a, b) {
  return a + b;
}

const addExpr = function (a, b) {
  return a + b;
};

var addArrow = (a, b) => a + b;

// Example
console.log(undefined);
if (!numProducts) deleteShoppingCart();

var numProducts = 10;

function deleteShoppingCart() {
  console.log('All products deleted!');
}

var x = 1;
let y = 2;
const z = 3;

console.log(x === window.x);
console.log(y === window.y);
console.log(z === window.z);
*/

//! THIS Key word
//? this keywork/variable: Special variable that is created for every execution context(every function). Takes the value of (points to) the "Owner" of the function in which the this keyword is used.
//? this is NOT static. It depends on how the function is called, and its value is only assigned when the functionis actually called.
//? Method --> this = <Object this is calling the method>
//? Simple function Call --> this = undefined
//? Arrow functions --> this = <this of surrounding function (lexical this)>
//? Event listener --> this = <DOM element that the handler is attached to>

/*
console.log(this);

const calcAge = function (birthYear) {
  console.log(2037 - birthYear);
  //console.log(this);
};
calcAge(1991);

const calcAgeArrow = birthYear => {
  console.log(2037 - birthYear);
  //console.log(this);
};
calcAgeArrow(1970);

const jonas = {
  year: 1991,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);
  },
};

jonas.calcAge();

const matilda = {
  year: 2017,
};

//? Method Borrowing(this keyword is dynamic)
matilda.calcAge = jonas.calcAge;
matilda.calcAge();

const f = jonas.calcAge;
//f();
*/

//! Regular Function Vs Arrow Functions
// var firstName = 'Matilda';
/*
const jonas = {
  firstName: 'Jonas',
  year: 1991,
  calcAge: function () {
    //console.log(this);
    console.log(2037 - this.year);

    //? Solution 1
    //     const self = this;
    //     const isMillenial = function () {
    //       console.log(self);
    //       //console.log(this.year >= 1981 && this.year <= 1996);
    //       console.log(self.year >= 1981 && self.year <= 1996);
    //     };
    //     isMillenial();
    //   },

    //? Solution 2
    const isMillenial = () => {
      console.log(this);
      //console.log(this.year >= 1981 && this.year <= 1996);
      console.log(this.year >= 1981 && this.year <= 1996);
    };
    isMillenial();
  },

  greet: () => {
    console.log(this);
    console.log(`Hey ${this.firstName}`);
  },
};
jonas.greet();
jonas.calcAge();

// Arguments keyword
const addExpr = function (a, b) {
  console.log(arguments);
  return a + b;
};
addExpr(2, 5);
addExpr(2, 5, 8, 12);
var addArrow = (a, b) => {
  console.log(arguments);
  return a + b;
};
addArrow(2, 5, 8);
*/
//! Primitives Vs. Objects (Primitive Vs. Reference Types)

/*
let age = 30;
let oldAge = age;
age = 31;
console.log(age);
console.log(oldAge);

const me = {
  name: 'Jonas',
  age: 30,
};

const friend = me;
friend.age = 27;

console.log('Me', me.age);
console.log('Friend', friend.age);
*/

//? Primitive Types
let lastName = 'Williams';
let oldLastName = lastName;
lastName = 'Davis';
console.log(lastName, oldLastName);

//? Reference Types
const jessica = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
};

const marriedJessica = jessica;
marriedJessica.lastName = 'Davis';
console.log('Before Marriage: ', jessica);
console.log('After Marriage: ', marriedJessica);
//marriedJessica = {};

//? Copying Objects
const jessica2 = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
  family: ['Alice', 'Bob'],
};

const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = 'Davis';
console.log('Before Marriage: ', jessica2);
console.log('After Marriage: ', jessicaCopy);

jessicaCopy.family.push('Mary');
jessicaCopy.family.push('John');
console.log('Before Marriage: ', jessica2);
console.log('After Marriage: ', jessicaCopy);

//? We need to do Deep Clone to achive this by using "Lodash"
