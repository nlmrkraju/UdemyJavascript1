'use strict';
//! OOP in Javascript
//? OOP in JS: Prototypes --> Prototypal inheritance: The prototype contains methods(behavior) that are accessible to all objects linked to that prototype.
//? 1. Constructor Functions
//? Techinque to create objects from a function.
//? This is how built-in objects like Arrays, Maps or Sets are acturally impleented.
//? 2. ES6 Classes
//? Modern alternative to constructor function syntax.
//? Syntactic sugar: behind the scenes, ES6 classes work exactly like constructor functions.
//? ES6 classes do NOT behave like classes in "classical OOP"
//? 3. Object.create()
//? The easiest and most strightforward way of linking an object to a prototype object.

//! Constructor Functions and the New Operator
const Person = function (firstName, birthYear) {
  //? Instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;

  //? Never create a method in a constructor function
  //   this.calcAge = function () {
  //     console.log(2037 - birthYear);
  //   };
};

const jonas = new Person('Jonas', 1991);
console.log(jonas);

//? 1. New {} is created.
//? 2. Function is called, this = {}
//? 3. {} linked to prototype.
//? 4. Function automatically return {}

const matilda = new Person('Matilda', 2017);
const jack = new Person('jack', 2075);
console.log(matilda, jack);
console.log(jonas instanceof Person);

Person.hey = function () {
  console.log(`Hey there 👏`);
  console.log(this);
};

Person.hey();

//! Prototypes
console.log(Person.prototype);

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

jonas.calcAge();
matilda.calcAge();

console.log(jonas.__proto__);
console.log(jonas.__proto__ === Person.prototype);

console.log(Person.prototype.isPrototypeOf(jonas));
console.log(Person.prototype.isPrototypeOf(matilda));
console.log(Person.prototype.isPrototypeOf(Person));

//? .prototypeOfLinkedObjects

Person.prototype.species = 'Homo Sapiens';
console.log(jonas.species, matilda.species);
console.log(jonas.hasOwnProperty('firstName'));
console.log(jonas.hasOwnProperty('species'));

//! Prototypal Inheritance and The Prototype Chain
//! Prototypal inheritance on built-in objects

console.log(jonas.__proto__);
console.log(jonas.__proto__.__proto__);
//? Object.protoype (top of prottype  chain)
console.log(jonas.__proto__.__proto__.__proto__);

console.dir(Person.prototype.constructor);

const arr = [3, 6, 4, 6, 9, 3]; //? new Array === []
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype);

console.log(arr.__proto__.__proto__);

Array.prototype.unique = function () {
  return [...new Set(this)];
};

console.log(arr.unique());

const h1 = document.querySelector('h1');
console.dir(h1);
console.dir(x => x + 1);

// Coding Challenge #1
// Your tasks:
// 1. Use a constructor function to implement a 'Car'. A car has a 'make' and a
// 'speed' property. The 'speed' property is the current speed of the car in
// km/h
// 2. Implement an 'accelerate' method that will increase the car's speed by 10,
// and log the new speed to the console
// 3. Implement a 'brake' method that will decrease the car's speed by 5, and log
// the new speed to the console
// 4. Create 2 'Car' objects and experiment with calling 'accelerate' and
// 'brake' multiple times on each of them
// Test data:
// § Data car 1: 'BMW' going at 120 km/h
// § Data car 2: 'Mercedes' going at 95 km/h
// GOOD LUCK 😀

// const Car = function (make, speed) {
//   //? Instance properties
//   this.make = make;
//   this.speed = speed;
// };

// Car.prototype.accelerate = function () {
//   this.speed += 10;
//   console.log(`'${this.make}' is going at  ${this.speed} Km/h`);
// };

// Car.prototype.brake = function () {
//   this.speed -= 5;
//   console.log(`'${this.make}' is going at  ${this.speed} Km/h`);
// };

// const bMW = new Car('BMW', 120);
// const mercedes = new Car('Mercedes', 95);

// bMW.accelerate();
// bMW.accelerate();
// bMW.brake();
// mercedes.brake();

//! ES6 Classes
class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  //? Instance methods
  //? Methods will be added to .prototype property
  calcAge() {
    console.log(2037 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.fullName}`);
  }

  //? Convention to set a property that already exists.
  set fullName(name) {
    console.log(name);
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name`);
  }

  get fullName() {
    return this._fullName;
  }

  //? Static mehtods
  static hey() {
    console.log(`Hey there 👏`);
    console.log(this);
  }
}

const jessica = new PersonCl('Jessica Davis', 1996);
console.log(jessica);
jessica.calcAge();

console.log(jessica.__proto__ === PersonCl.prototype);
jessica.greet();

//? 1. Classes are NOT hoisted (Can't use before declaration)
//? 2. Classes are fist-class citizens
//? 3. Classes are executed in strict mode

const walter = new PersonCl('Walter White', 1965);
PersonCl.hey();

//! Setters and Getters
const account = {
  Owner: 'Jonas',
  movements: [200, 530, 120, 300],

  get latest() {
    return this.movements.slice(-1).pop();
  },
  set latest(mov) {
    this.movements.push(mov);
  },
};

console.log(account.latest);

account.latest = 50;
console.log(account.movements);

//! Static Methods
//! Object.create
const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },
  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonProto);
console.log(steven);
steven.name = 'Steven';
steven.birthYear = 2002;
steven.calcAge();

console.log(steven.__proto__ === PersonProto);

const sarah = Object.create(PersonProto);
sarah.init('Sarah', 1979);
sarah.calcAge();

// Coding Challenge #2
// Your tasks:
// 1. Re-create Challenge #1, but this time using an ES6 class (call it 'CarCl')
// 2. Add a getter called 'speedUS' which returns the current speed in mi/h (divide
// by 1.6)
// 3. Add a setter called 'speedUS' which sets the current speed in mi/h (but
// converts it to km/h before storing the value, by multiplying the input by 1.6)
// 4. Create a new car and experiment with the 'accelerate' and 'brake'
// methods, and with the getter and setter.
// Test data:
// § Data car 1: 'Ford' going at 120 km/h
// GOOD LUCK 😀

/*
class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    console.log(`'${this.make}' is going at  ${this.speed} Km/h`);
  }

  brake() {
    this.speed -= 5;
    console.log(`'${this.make}' is going at  ${this.speed} Km/h`);
  }

  get speedUS() {
    return this.speed / 1.6;
  }

  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}

const ford = new CarCl('Ford', 120);

ford.accelerate();
ford.accelerate();
ford.brake();
ford.speedUS = 50;
console.log(ford.speedUS);
*/

//! Inheritance between "Classes": Constructor Functions
