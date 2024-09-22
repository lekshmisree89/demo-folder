let one:any= 64.55;
let two:any = 'Howdy!';
const three = '656302';
const four = 64;
const five = false;
const six = null;
let seven;//any

/*

TypeScript attempts to infer the type of a variable based on the value assigned to it.

JavaScript also has a `typeof` operator that can be used to determine the type of a variable.

Insert comments below to explain what the TypeScript type of each variable would be, as well as what each type would be logged to the console by JavaScript.

For example:

let hello = 'world';

console.log(typeof hello); // Logs string, and the TypeScript type would also be string.

*/

// TODO
console.log(typeof one);//logs number ,type is also number

// TODO-string
console.log(typeof two);

// TODO-string
console.log(typeof three);

// TODO//number
console.log(typeof four);

// TODO//boolean
console.log(typeof five);

// TODO-// object
console.log(typeof six);

// TODO//any
console.log(typeof seven);

// Reassigns variables
one = 'Hello!';//number
two = false;
seven = 23;

// TODO
console.log(typeof one);

// TODO
console.log(typeof two);

// TODO
console.log(typeof seven);
