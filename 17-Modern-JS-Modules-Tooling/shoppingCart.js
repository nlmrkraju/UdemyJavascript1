//? Exporting Module
console.log(`Exportig Module`);
//? Variables are scopped to the current module only.
//? To be used outside the module they need to be exported.
//? There are 2 types of exports 1. Named and 2. Default

//? Blocking code
// console.log(`Start fetching users`);
// await fetch(`https://jsonplaceholder.typicode.com/posts`);
// console.log(`Finish fetching`);

const shippingCart = 10;
export const cart = [];

//? Named export
export const addToCart = function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product} added to cart`);
};

const totalPrice = 237;
const totalQuantity = 23;

export { totalPrice, totalQuantity as tq };

//? Default exports are used only when we want to export one thing per module
export default function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product} added to cart`);
}
