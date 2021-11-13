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

// import * as shoppingCart from './shoppingCart.js';
// shoppingCart.addToCart('bread', 5);
// console.log(shoppingCart.totalPrice);

//import add, { addToCart, totalPrice as price, tq } from './shoppingCart.js';
//console.log(price);

import add, { cart } from './shoppingCart.js';
add('pizza', 2);
add('bread', 5);
add('apples', 4);

console.log(cart);
