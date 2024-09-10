//dependencirs
const incrementEl = document.querySelector('#increment');
const decrementEl = document.querySelector('#decrement');
const countEl = document.querySelector('#count');


//data
let count = 0;

//functions:

function setCounterText() {
  countEl.textContent = count;
}

// TODO: Add event listener to increment button

// TODO: Add event listener to decrement button



incrementEl.addEventListener('click', function() {
  count++;
  setCounterText();
   //to get the count frm fn 
});


decrementEl.addEventListener('click', function( ) {
  if (count > 0){
  count--;
  setCounterText();
  }
});