// WRITE YOUR CODE BELOW
let customerDrink = {
    name: "Coffee",  // The drink's name
    sugars: 2,           // The number of sugars
    isReady: false       // Boolean indicating whether the order is ready
};
console.log(`Drink: ${customerDrink.name}, Sugars: ${customerDrink.sugars}`);
// Output: Drink: Coffee, Sugars: 2

if (customerDrink.isReady) {
    console.log("Ready for pick-up");
} else {
    console.log("Still in order queue");
}
// Output: Still in order queue (because isReady is false)

customerDrink.isReady = true;

if (customerDrink.isReady) {
    console.log("Ready for pick-up");
} else {
    console.log("Still in order queue");
}
// Output: Ready for pick-up
