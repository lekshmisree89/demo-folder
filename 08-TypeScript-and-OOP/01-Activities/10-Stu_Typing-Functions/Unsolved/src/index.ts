// TODO: What type is the parameter and return value of the following function?
//string-parameter
//return void
/**
 * 
 * @param guest -string
 * @return:void
 */
const welcomeGuest = (guest: string): void => {
  console.log(`Welcome ${guest}, how have you been?`);
};

welcomeGuest('James');

// TODO: What type are the parameters and 
//return value of the following function?
//param-number
//return :number
const addition = (x: number, y: number): number => {
  return x + y;
};

const sum: number = addition(42, 137);
console.log(sum);

// TODO: Add the correct type for the following variable:
const optionsAvailable :string[] = [
  'Pasta',
  'Ramen',
  'Pizza',
  'Salad',
  'Quinoa',
  'Tacos',
  'Fried Rice',
  'Curry',
];

// TODO: Add the correct type for the parameter and return value in the following function:
const mealPlanner = (mealOptions:string[]):string => {
  // TODO: Add the correct type for the following variable:
  const randomChoice :string=
    mealOptions[Math.floor(Math.random() * mealOptions.length)];

  return randomChoice;
}; 

// TODO: Add the correct type for the following variable:
const dinnerTonight:string = mealPlanner(optionsAvailable);

console.log(dinnerTonight);

// TODO: Add the type for each parameter and the return value of the following function:
const submitUser = (
  username: string,
  email: string,
  password: string,
  isAdmin: boolean,
  age: number
) :string => {
  const user = {
    username,
    email,
    password,
    isAdmin,
    age,
  };

  console.log(user);

  return `Thanks for signing up ${username}, we'll contact you soon!`;
};

submitUser(
  'eternalCoder42',
  'sami@email.com',
  'myUltimatePassword1980',
  false,
  27
);

