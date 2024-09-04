const a = '50';
const b = 50;
const c = 100;
const d = c % b;
const e = c / 2;

const expression1 = (b === e);//true
const expression2 = (e < d);//true

// Use comparison operators so 
//all expressions below log to the 
//console as true
console.log(a == b);
console.log(b === e);//true
console.log(c > b);//100>50
console.log(d === 0);//d=0;

// Use logical operators so all expressions below log to the console as true
console.log(expression1 && !expression2);
console.log(expression1 || expression2);//false||true
  
