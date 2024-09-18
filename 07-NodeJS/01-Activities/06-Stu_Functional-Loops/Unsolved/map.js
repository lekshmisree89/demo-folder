const originalArray = [1, 3, 2, 5, 10];

// doubledArray is equal to a new array of numbers multiplied by 2 and returned by map(). map() will use an anonymous function as a condition.
// The anonymous function returns each number multiplied by 2. The 
//returned result is added to a new array.
const doubledArray = originalArray.map((data) => data * 2);

console.log(doubledArray);
console.log(originalArray);

// TODO: Describe how map is working in the example below. 
//What will the value of tripledArray be?
const tripledArray = originalArray.map((data) => data * 3);
//fn returns  a new array with values *3
console.log(tripledArray);
console.log(originalArray);

// TODO: Describe how map is working in the example below. What will the value of oddOrEven be?
const oddOrEven = originalArray.map((num) => {
  if (num % 2 === 0) {
    return 'even';
  } else {
    return 'odd';
  }
});
//map iterates thru each element in an array
//call back fn checks the num is odd or evn
//map function gives a new array (oddOrEven), where each element is
// either'even' or 'odd',depending on the corresponding number in 
//originalArray.
console.log(oddOrEven);