const timerEl = document.getElementById('countdown');
const mainEl = document.getElementById('main');

const message =
  'Some say the world will end in 🔥 Some say in ice. From what I’ve tasted of desire, I hold with those who favor fire. But if it had to perish twice, I think I know enough of hate. To say that for destruction ice, Is also great, And would suffice.';
const words = message.split(' ');

function countdown() {
  let timeLeft = 5; // Start the countdown from 5

  // Use the `setInterval()` method to call a function every 1000 milliseconds
  const timeInterval = setInterval(function () {
    // Display the time left
    timerEl.textContent = `Time left: ${timeLeft} seconds`;

    // Decrement the time left by 1
    timeLeft--;

    // Once timeLeft reaches 0, stop the countdown and display the message
    if (timeLeft < 0) {
      clearInterval(timeInterval); // Stop the timer
      displayMessage(); // Call function to display the message
    }
  }, 1000);
}

// Displays the message one word at a time
function displayMessage() {
  let wordCount = 0;

  // Uses the `setInterval()` method to call a function every 1000 milliseconds
  const msgInterval = setInterval(function () {
    // If there are no more words left in the message
    if (words[wordCount] === undefined) {
      // Use `clearInterval()` to stop the timer
      clearInterval(msgInterval);
    } else {
      // Display one word of the message
      mainEl.textContent = words[wordCount];
      wordCount++;
    }
  }, 5000);
}

countdown();
