//! Module
//? Reusable piece of code that encapsulates implementation details.
//? Usually a standalone file, but it doesn't have to be.
//? Compose sofware: Modules are small building blocks that we put together to build complex applicaitons.
//? Isolate Components: Modules can be developed in isolation without thinking about entire codebase.
//? Abstract code: Implement low-level code in modules and inort these abstractions into other modules.
//? Organized code: Modules naturally lead to a more organized codebase.
//? Reuse code: Modules allow us to easily reuse the same code, even across multiple projects.

//! ES6 Modules
//? Modues ar stored in files, exactly one module per file.

//! Exporting and importing in ES6 Modules
//? All modules are excuted in strict mode by default
//? Name import needs to be in braces

//import { addToCart, totalPrice as price, tq } from './shoppingCart.js';
// addToCart('bread', 5);
// console.log(price, tq);

console.log(`Importing Module`);

import * as shoppingCart from './shoppingCart.js';
shoppingCart.addToCart('bread', 5);
console.log(shoppingCart.totalPrice);

//import add, { addToCart, totalPrice as price, tq } from './shoppingCart.js';
//console.log(price);

import add, { cart } from './shoppingCart.js';
add('pizza', 2);
add('bread', 5);
add('apples', 4);

console.log(cart);

//! Top-Level await
/*
//? Atleast in moudles from ES2022 await can be used outside async
// console.log('Start fetching');
// const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
// const data = await res.json();
// console.log(data);
// console.log('Something');

const getLastPost = async function () {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const data = await res.json();
  console.log(data);

  return { title: data.at(-1).title, text: data.at(-1).body };
};

const lastPost = getLastPost();
console.log(lastPost);

// Not clean
// lastPost.then(last => console.log(last));

const lastPost2 = await getLastPost();
console.log(lastPost2);

*/
//! The Module Pattern
/*
const ShoppingCart2 = (function () {
  const cart = [];
  const shippingCost = 10;
  const totalPrice = 237;
  const totalQuantity = 23;

  const addToCart = function (product, quantity) {
    cart.push({ product, quantity });
    console.log(
      `${quantity} ${product} added to cart (shipping cost is ${shippingCost})`
    );
  };

  const orderStock = function (product, quantity) {
    cart.push({ product, quantity });
    console.log(`${quantity} ${product} ordered from suplier`);
  };

  return {
    addToCart,
    cart,
    totalPrice,
    totalQuantity,
  };
})();

ShoppingCart2.addToCart('apple', 4);
ShoppingCart2.addToCart('pizza', 2);
console.log(ShoppingCart2);
console.log(ShoppingCart2.shippingCost);
*/
//! CommonJS Modules
//? Other than Module pattern there are few pattern which are not native java script modules and they rely on some external implementations. Two examples are AMD Modules and CommonJS Modules.

/*
//? Export
export.addToCart = function (product, quantity) {
  cart.push({ product, quantity });
  console.log(
    `${quantity} ${product} added to cart (shipping cost is ${shippingCost})`
  );
};

//? Import
const {addToCart} = require('./shoppingCart.js')
*/

//! A Brief introduction to the command line
//! Introduction to NPM
import cloneDeep from './node_modules/lodash-es/cloneDeep.js';

const state = {
  cart: [
    { product: 'bread', quantity: 5 },
    { product: 'pizza', quantity: 3 },
  ],
  user: { loggedIn: true },
};

const stateClone = Object.assign({}, state);
const stateDeepClone = cloneDeep(state);
state.user.loggedIn = false;
console.log(stateClone);
console.log(stateDeepClone);

//! Bundling with Parcel and NPM Scripts
//? Parcel is alternative for webpack.

if (module.hot) {
  module.hot.accept();
}

class Person {
  greeting = 'Hey';
  constructor(name) {
    this.name = name;
    console.log(`${this.greeting}, ${this.name}`);
  }
}

const jonas = new Person('Jonas');

console.log('Jonas' ?? null);

console.log(cart.find(el => el.quantity >= 2));
Promise.resolve('TEST').then(x => console.log(x));
import 'core-js/stable';
// import 'core-js/stable/array/find';
// import 'core-js/stable/promise';

//? Polyfilling async functions
import 'regenerator-runtime/runtime';

//! Writing clean and modern javascript
//! Let's fix some bad code: part 1
//! Declarative and Functional JavaScript Principles
//? Imperative and Declarative codes
//? Functional Programming is a declarative way

//! Let's fix some bad code: part 2
