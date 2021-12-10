'use strict';

const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  //? ES6 enhanced object literals
  openingHours,

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = '20:00',
    address,
  }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, ${ing3}`);
  },

  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

/*
const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[3];

const [x, y, z] = arr;
console.log(x, y, z);
console.log(arr);

let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

//? Switching Variables
[main, secondary] = [secondary, main];
console.log(main, secondary);

//? Receive 2 return values from a function
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

//? Nested Destructuring
const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;
const [i, , [j, k]] = nested;
console.log(i, j, k);

//? Default Values
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);

const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

//? Default Values
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

//? Mutating Variables
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };
({ a, b } = obj);
console.log(a, b);

//? nested objects
const {
  fri: { open: o, close: c },
} = openingHours;
console.log(o, c);

restaurant.orderDelivery({
  time: '22:30',
  address: 'Via del sole, 21',
  mainIndex: 2,
  starterIndex: 2,
});

restaurant.orderDelivery({
  address: 'Via del sole, 21',
  starterIndex: 1,
});

//! Spread Operator
const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);

const newArr = [1, 2, ...arr];
console.log(newArr);

console.log(...newArr);

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

//? Copy Array
const mainMenuCopy = [...restaurant.mainMenu];
console.log(mainMenuCopy);

//?Join 2 arrays
const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(menu);

//? spread operator works on Iterables: arrays, strings, maps, sets. NOT Objects
const str = 'Jonas';
const letters = [...str, '', 'S.'];
console.log(letters);

//? Realworld example
const ingredients = [
  // prompt("Let's make pasta! Ingredient1?"),
  // prompt("Let's make pasta! Ingredient2?"),
  // prompt("Let's make pasta! Ingredient3?"),
];
console.log(ingredients);
restaurant.orderPasta(...ingredients);

//? Objects
const newRestaurant = { fondedIn: 1998, ...restaurant, founder: 'Guiseppe' };
console.log(newRestaurant);

const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Ristornte Roma';
console.log(restaurantCopy.name);
console.log(restaurant.name);

//! REST Pattern and Parameters

//?SPREAD, because on RIGHT side of =
const arr = [1, 2, ...[3, 4]];

//? REST, because on LEFT side of
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risotto, otherFood);

//? Objects
const { sat, ...weeekdays } = restaurant.openingHours;
console.log(weeekdays);

//? 2) Functions
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  console.log(sum);
};
add(2, 3);
add(5, 3, 7, 2);
add(8, 2, 5, 3, 2, 1, 4);

const x = [23, 5, 7];
add(...x);

restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinsh');
restaurant.orderPizza('mushrooms');

//! Short Circuiting (&& And ||)

console.log(`============ OR ===============`);
//? Use ANY data type, return ANY data type, short-circuiting
console.log(3 || 'Jonas');
console.log('' || 'Jonas');
console.log(true || 0);
console.log(undefined || null || 0);
console.log(undefined || 0 || '' || 'Hello' || 23 || null);

//restaurant.numGuests = 23;
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);

const guests = restaurant.numGuests || 10;
console.log(guests);

console.log(`============ AND ===============`);
console.log(0 && 'Jonas');
console.log(7 && 'Jonas');
console.log('Hello' && 23 && null && 'Jonas');

if (restaurant.orderPizza) {
  restaurant.orderPizza('mushrooms', 'spinach');
}

restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');
*/

//! Logical Assignment Operators

const rest1 = {
  name: 'Capri',
  //numGuests: 20,
  numGuests: 0,
};

const rest2 = {
  name: 'La Piazza',
  owner: 'Giovanni Rossi',
};

//? OR assignment operator

// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;
// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;

//? nullish assignment operator (null or undefined)
rest1.numGuests ??= 10;
rest2.numGuests ??= 10;

//? AND assignment operator
// rest1.owner = rest1.owner && '<ANONYMOUS>';
// rest2.owner = rest2.owner && '<ANONYMOUS>';
rest1.owner &&= '<ANONYMOUS>';
rest2.owner &&= '<ANONYMOUS>';

console.log(rest1);
console.log(rest2);

/*

//! The NULLISH COALESCING OPERATOR
restaurant.numGuests = 0;
const guests = restaurant.numGuests || 10;
console.log(guests);

//? Nullish: null or undefined (NOT 0 or '')
const guestsCorrect = restaurant.numGuests ?? 10;
console.log(guestsCorrect);
*/

// We're building a football betting app (soccer for my American friends 😅)!
// Suppose we get data from a web service about a certain game ('game' variable on
// next page). In this challenge we're gonna work with that data.
// Your tasks:
// 1. Create one player array for each team (variables 'players1' and
// 'players2')
// 2. The first player in any player array is the goalkeeper and the others are field
// players. For Bayern Munich (team 1) create one variable ('gk') with the
// goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10
// field players
// 3. Create an array 'allPlayers' containing all players of both teams (22
// players)
// 4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a
// new array ('players1Final') containing all the original team1 players plus
// 'Thiago', 'Coutinho' and 'Perisic'
// 5. Based on the game.odds object, create one variable for each odd (called
// 'team1', 'draw' and 'team2')
// 6. Write a function ('printGoals') that receives an arbitrary number of player
// names (not an array) and prints each of them to the console, along with the
// number of goals that were scored in total (number of player names passed in)
// 7. The team with the lower odd is more likely to win. Print to the console which
// team is more likely to win, without using an if/else statement or the ternary
// operator.
// Test data for 6.: First, use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'.
// Then, call the function again with players from game.scored

/*
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
  printGoals: function (...playersScored) {
    let playersNames = ``;
    for (let i = 0; i < playersScored.length; i++) {
      playersNames += `${playersScored[i]}, `;
    }
    console.log(
      `${playersNames} scored total of ${playersScored.length} goals.`
    );
  },
};

const [players1, players2] = game.players;
console.log(players1, players2);

const [gk, ...fieldPlayers] = players1;
console.log(gk, fieldPlayers);

const allPlayers = [...players1, ...players2];
console.log(allPlayers);

const players1Final = [...players1, 'Thiago', 'Coutinho', 'Periscic'];
console.log(players1Final);

const { team1: team1, x: draw, team2: team2 } = game.odds;
console.log(`Team1: ${team1}, Draw: ${draw}, Team2: ${team2}`);

// const playersScored = [
//   prompt('Players who scored the goal?'),
//   prompt('Players who scored the goal?'),
//   prompt('Players who scored the goal?'),
//   prompt('Players who scored the goal?'),
// ];
//game.printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
game.printGoals(...game.scored);

team1 < team2 && console.log(`Team1 is likely to win!`);
team2 < team1 && console.log(`Team2 is likely to win!`);
*/

/*
//! Looping Arrays - The for-of loop

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

for (const item of menu) console.log(item);

for (const [i, el] of menu.entries()) {
  console.log(`${i + 1}: ${el}`);
}

console.log([...menu.entries()]);

//! Optional Changing (.?)
// console.log(restaurant.openingHours.mon.open);
console.log(restaurant.openingHours.mon?.open);
console.log(restaurant.openingHours?.mon?.open);

//? Example
const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

for (const day of days) {
  const open = restaurant.openingHours[day]?.open ?? 'closed';
  console.log(`On ${day}, we open at ${open}`);
}

//? Methods
console.log(restaurant.order?.(0, 1) ?? 'Method does not exist.');
console.log(restaurant.orderRisotto?.(0, 1) ?? 'Method does not exist.');

//? Arrays
// const users = [{ name: 'Jonas', email: 'hello@jonal.io' }];
const users = [];

console.log(users[0]?.name ?? 'User array empty');

//! Looping Objects: Object Keys, Values and Entries
//? Property NAMES
const properties = Object.keys(openingHours);

let openStr = `We are open on ${properties.length} days:`;

for (const day of Object.keys(openingHours)) {
  openStr += ` ${day},`;
}

console.log(openStr);

//? Property VALUES
const values = Object.values(openingHours);
console.log(values);

//? Entire Object
const entries = Object.entries(openingHours);
console.log(entries);

for (const [key, { open, close }] of entries) {
  console.log(`On ${key} we open at ${open} and close at ${close}`);
}


*/

// Let's continue with our football betting app! Keep using the 'game' variable from
// before.
// Your tasks:
// 1. Loop over the game.scored array and print each player name to the console,
// along with the goal number (Example: "Goal 1: Lewandowski")
// 2. Use a loop to calculate the average odd and log it to the console (We already
// studied how to calculate averages, you can go check if you don't remember)
// 3. Print the 3 odds to the console, but in a nice formatted way, exactly like this:
// Odd of victory Bayern Munich: 1.33
// Odd of draw: 3.25
// Odd of victory Borrussia Dortmund: 6.5
// Get the team names directly from the game object, don't hardcode them
// (except for "draw"). Hint: Note how the odds and the game objects have the
// same property names 😉
// 4. Bonus: Create an object called 'scorers' which contains the names of the
// players who scored as properties, and the number of goals as the value. In this
// game, it will look like this:
// {
// Gnarby: 1,
// Hummels: 1,
// Lewandowski: 2
// }
// GOOD LUCK 😀

/*
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
  printGoals: function (...playersScored) {
    let playersNames = ``;
    for (let i = 0; i < playersScored.length; i++) {
      playersNames += `${playersScored[i]}, `;
    }
    console.log(
      `${playersNames} scored total of ${playersScored.length} goals.`
    );
  },
};

for (const [i, el] of game.scored.entries()) {
  console.log(`Goal ${i + 1}: ${el}`);
}

let totalOdds = 0;
let entries = Object.entries(game.odds);
for (const [key, value] of entries) {
  totalOdds += value;
}
console.log(`Average odd is ${totalOdds / entries.length}`);

for (const [key, value] of entries) {
  console.log(`Odd of  ${'victory ' + game[key] ?? 'draw'} : ${value}`);
}

let playersScored = [...game.scored];
const scorers = {};
for (const playerScored of playersScored) {
  // if (scorers[playerScored]) {
  //   scorers[playerScored]++;
  // } else {
  //   scorers[playerScored] = 1;
  // }

  scorers[playerScored] ? scorers[playerScored]++ : (scorers[playerScored] = 1);
}

console.log(scorers);
*/

/*
//! SETS
//? Set is a collection of unique values
//? Sets can hold different data types

const ordersSet = new Set([
  'Pasta',
  'Pizza',
  'Pizza',
  'Risotto',
  'Pasta',
  'Pizza',
]);
console.log(ordersSet);

console.log(new Set('Jonas'));

console.log(ordersSet.size);
console.log(ordersSet.has('Pizza'));
console.log(ordersSet.has('Bread'));

ordersSet.add('Garlic Bread');
ordersSet.add('Garlic Bread');
ordersSet.delete('Risotto');
// ordersSet.clear();
console.log(ordersSet);

//? Can't retrive values by indexes

for (const order of ordersSet) console.log(order);

//? Example

const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
const staffUnique = [...new Set(staff)];
console.log(staffUnique);
console.log(
  new Set(['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']).size
);

console.log(new Set('jonasschmedtmann').size);

//! MAPS: Fundamentals
//? In objects keys are strings but in maps key can be any type it can be objects, arrays or orther maps.
const rest = new Map();
rest.set('name', 'Classico Intaliano');
rest.set(1, 'Firenze, Italy');
console.log(rest.set(2, 'Lisbon, Portugal'));

rest
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are open :)')
  .set(false, 'We are closed :(');

console.log(rest.get('name'));
console.log(rest.get(true));
console.log(rest.get(1));

const time = 21;
console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

console.log(rest.has('categories'));
rest.delete(2);
// console.log(rest.clear());
const arr = [1, 2];
rest.set(arr, 'Test');

rest.set(document.querySelector('h1'), 'Heading');

console.log(rest);
console.log(rest.size);

console.log(rest.get(arr));


//! MAPS : Iteration

const question = new Map([
  ['question', 'What is the best programming language in the world?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'Javascript'],
  ['correct', 3],
  [true, 'Correct 🎉'],
  [false, 'Try again!'],
]);
console.log(question);

//? Convert object to map
console.log(Object.entries(openingHours));
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);

//? Quiz app
console.log(question.get('question'));
for (const [key, value] of question) {
  if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
}

// const answer = Number(prompt('Your answer'));
const answer = 3;
console.log(answer);
console.log(question.get(answer === question.get('correct')));

//? Conver map to array
console.log([...question]);
console.log(question.entries());
console.log([...question.keys()]);
console.log([...question.values()]);

//! Which Data Structure to Use

//? Collection of Data --> Data Source
//? Simple List (Array or Sets), Key/Value Paris (Objects or Maps),
//? Other Built-In: WeakMap, WeakSet
//? Non-Built In: Stacks, Queues, Linked Lists, Tress, Hash Tables


*/

// Let's continue with our football betting app! This time, we have a map called
// 'gameEvents' (see below) with a log of the events that happened during the
// game. The values are the events themselves, and the keys are the minutes in which
// each event happened (a football game has 90 minutes plus some extra time).
// Your tasks:
// 1. Create an array 'events' of the different game events that happened (no
// duplicates)
// 2. After the game has finished, is was found that the yellow card from minute 64
// was unfair. So remove this event from the game events log.
// 3. Compute and log the following string to the console: "An event happened, on
// average, every 9 minutes" (keep in mind that a game has 90 minutes)
// 4. Loop over 'gameEvents' and log each element to the console, marking
// whether it's in the first half or second half (after 45 min) of the game, like this:
// [FIRST HALF] 17:
// ⚽
// GOAL

/*
const gameEvents = new Map([
  [17, '⚽ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽ GOAL'],
  [80, '⚽ GOAL'],
  [92, '🔶 Yellow card'],
]);

const gameEventsSet = [...new Set(gameEvents.values())];
console.log(gameEventsSet);

gameEvents.delete(64);
console.log(gameEvents);

console.log(
  `An event happened, on average, every ${90 / gameEvents.size} minutes`
);

const time = [...gameEvents.keys()].pop();
console.log(time);
console.log(
  `An event happened, on average, every ${time / gameEvents.size} minutes`
);

let whichHalf;
for (const [key, value] of gameEvents) {
  whichHalf = key <= 45 ? '[FIRST HALF]' : '[SECOND HALF]';
  console.log(`${whichHalf} ${key}: ${value}`);
}
*/

/*
//! Strings -- Part 1

const ariline = 'TAP Air Portugal';
const plane = 'A320';

console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log('B737'[0]);

console.log(ariline.length);
console.log('B737'.length);

console.log(ariline.indexOf('r'));
console.log(ariline.lastIndexOf('r'));
console.log(ariline.indexOf('Portugal'));

console.log(ariline.slice(4));
console.log(ariline.slice(4, 7));

console.log(ariline.slice(0, ariline.indexOf(' ')));
console.log(ariline.slice(ariline.lastIndexOf(' ') + 1));

console.log(ariline.slice(-2));
console.log(ariline.slice(1, -1));

const checkMiddleSeat = function (seat) {
  //? B and E are middle seats
  const s = seat.slice(-1);
  if (s === 'B' || s === 'E') console.log('You got the middel seat 😉');
  else console.log('You got lucky 😉');
};

checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E');

//? Strings are premitivies. To methods on strings java script converts string primitive to string object and that object is the object where methods are called and this is called Boxing.

console.log(new String('Jonas'));
console.log(typeof new String('Jonas'));

console.log(typeof new String('Jonas').slice(1));

//! Strings --> Part 2
console.log(ariline.toLowerCase());
console.log(ariline.toUpperCase());

//? Fix capitalization in name
const passenger = 'jOnAS';
const passengerLower = passenger.toLowerCase();
const passengerCorrect =
  passengerLower[0].toUpperCase() + passengerLower.slice(1);

console.log(passengerCorrect);

//? comparing email
const email = 'hello@jonas.io';
const loginEmail = '  Hello@Jonas.Io \n';

// const lowerEmail = loginEmail.toLowerCase();
// const trimmedEmail = lowerEmail.trim();

const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail);
console.log(email === normalizedEmail);

//? Replacing
const priceGB = '288,97#';
const priceUS = priceGB.replace('#', '$').replace(',', '.');
console.log(priceUS);

const announcement =
  'All passengers come to bording door 23. Boarding door 23!';
console.log(announcement.replace('door', 'gate'));
// console.log(announcement.replaceAll('door', 'gate'));

console.log(announcement.replace(/door/g, 'gate'));

//? Booleans
const plane1 = 'Airbus A320neo';
console.log(plane1.includes('A320'));
console.log(plane1.includes('Boeing'));
console.log(plane1.startsWith('Air'));

if (plane1.startsWith('Airbus') && plane1.endsWith('neo')) {
  console.log('Part of the NEW Airbus family');
}

//? Prctice exercise
const checkBaggage = function (items) {
  const baggage = items.toLowerCase();
  if (baggage.includes('knife') || baggage.includes('gun')) {
    console.log('You are NOT allowed on board');
  } else {
    console.log('Welcome aboard');
  }
};
checkBaggage('I have a laptop, some Food and a pocket Knife');
checkBaggage('Socks and camera');
checkBaggage('Got some snacks and a gun for protection');

// ! Strings -- Part 3

//? Split and Join
console.log('a+very+nice+string'.split('+'));
console.log('Jonas Schmedtmann'.split(' '));

const [firstName, lastName] = 'Jonas Schmedtmann'.split(' ');

const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
console.log(newName);

const capitalizeName = function (name) {
  const names = name.split(' ');
  const namesUpper = [];

  for (const n of names) {
    // namesUpper.push(n[0].toUpperCase() + n.slice(1));
    namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
  }
  console.log(namesUpper.join(' '));
};

capitalizeName('jessica ann smith davis');
capitalizeName('jonas schmedtmann');

//? Padding
const message = 'Go to gate 23!';
console.log(message.padStart(25, '+').padEnd(35, '+'));
console.log('Jonas'.padStart(25, '+').padEnd(35, '+'));

const maskCreditCard = function (number) {
  const str = number + '';
  const last = str.slice(-4);
  return last.padStart(str.length, '*');
};

console.log(maskCreditCard(223300));
console.log(maskCreditCard(43370293422233));
console.log(maskCreditCard('23423434252345432343555'));

//? Repeat

const message2 = 'Bad Weather... All Departures Delayed... ';
console.log(message2.repeat(5));

const planesInLine = function (n) {
  console.log(`There are ${n} planes in line ${'✈'.repeat(n)}`);
};

planesInLine(5);
planesInLine(3);
planesInLine(12);

*/

// Write a program that receives a list of variable names written in underscore_case
// and convert them to camelCase.
// The input will come from a textarea inserted into the DOM (see code below to
// insert the elements), and conversion will happen when the button is pressed.
// Test data (pasted to textarea, including spaces):
// underscore_case
// first_name
// Some_Variable
// calculate_AGE
// delayed_departure
// Should produce this output (5 separate console.log outputs):
// underscoreCase ✅
// firstName ✅✅
// someVariable ✅✅✅
// calculateAge ✅✅✅✅
// delayedDeparture ✅✅✅✅✅
// Hints:
// § Remember which character defines a new line in the textarea 😉
// § The solution only needs to work for a variable made out of 2 words, like a_b
// § Start without worrying about the ✅. Tackle that only after you have the variable
// name conversion working 😉
// § This challenge is difficult on purpose, so start watching the solution in case
// you're stuck. Then pause and continue!
// Afterwards, test with your own test data!
// GOOD LUCK 😀
/*
document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

document.querySelector('button').addEventListener('click', function () {
  console.clear();
  const inputTextValue = document.querySelector('textarea').value;
  const inputTextArray = inputTextValue.split('\n');
  for (const [i, inputTextArrayValue] of inputTextArray.entries()) {
    const [
      firstword,
      lastWord,
    ] = inputTextArrayValue.toLowerCase().trim().split('_');
    const newWord = [
      firstword,
      lastWord[0].toUpperCase() + lastWord.slice(1),
    ].join('');
    console.log(`${newWord.padEnd(20) + '✅'.repeat(i + 1)}`);
  }
});
*/
