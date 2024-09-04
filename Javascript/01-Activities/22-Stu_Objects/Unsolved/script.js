// WRITE YOUR CODE BELOW
let customerDrink = {
    name: "Coffee",  
    sugars: 3,          
    isReady: true,    
};
console.log(customerDrink.name);
console.log(customerDrink.sugars);

console.log(`The drink is ${customerDrink.name} 
and sugar needed is ${customerDrink.sugars}`);






if (customerDrink.isReady) {
    console.log(`Your ${customerDrink.name} is ready for pick-up`);
} else {
    console.log(`Your ${customerDrink.name} is still in order queue`);
}

  