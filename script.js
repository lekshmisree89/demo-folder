const quizData = [
    {
      question: 'What is the capital of France?',
      choices: ['Paris', 'London', 'Berlin', 'Madrid'],
      correct: 'Paris',
    },
    {
      question: 'Who developed JavaScript?',
      choices: ['Brendan Eich', 'Linus Torvalds', 'Elon Musk', 'Bill Gates'],
      correct: 'Brendan Eich',
    },
    // Add more questions here
  ];
  
  let currentQuestionIndex = 0;
  let score = 0;
  
  document.addEventListener('DOMContentLoaded', loadQuiz);
  document.getElementById('next-question').addEventListener('click', handleNextQuestion);
  
  function loadQuiz() {
    const questionData = quizData[currentQuestionIndex];
    const quizContainer = document.getElementById('quiz-container');
    const feedbackEl = document.getElementById('feedback');
    const scoreBoardEl = document.getElementById('score-board');
  
    feedbackEl.innerHTML = ''; // Clear feedback message
    quizContainer.innerHTML = `
      <h2>${questionData.question}</h2>
      ${questionData.choices.map((choice, index) => `
        <div class="form-check">
          <input type="radio" name="answer" id="choice${index}" value="${choice}" class="form-check-input">
          <label for="choice${index}" class="form-check-label">${choice}</label>
        </div>
      `).join('')}
    `;
  
    // Display the current score
    scoreBoardEl.innerHTML = `Score: ${score} / ${quizData.length}`;
  }
  
  function handleNextQuestion() {
    const selectedAnswer = document.querySelector('input[name="answer"]:checked');
    const feedbackEl = document.getElementById('feedback');
  
    if (selectedAnswer) {
      const userAnswer = selectedAnswer.value;
      if (userAnswer === quizData[currentQuestionIndex].correct) {
        score++;
        feedbackEl.innerHTML = '<span class="text-success">Correct!</span>';
      } else {
        feedbackEl.innerHTML = `<span class="text-danger">Wrong! The correct answer is ${quizData[currentQuestionIndex].correct}.</span>`;
      }
  
      currentQuestionIndex++;
  
      if (currentQuestionIndex < quizData.length) {
        // Load the next question after a brief delay
        setTimeout(loadQuiz, 1000); // Wait for 1 second before loading the next question
      } else {
        showResult();
      }
  
      // Save progress to localStorage
      localStorage.setItem('quizProgress', JSON.stringify({ score, currentQuestionIndex }));
    } else {
      feedbackEl.innerHTML = '<span class="text-warning">Please select an answer before proceeding!</span>';
    }
  }
  
  function showResult() {
    const resultContainer = document.getElementById('quiz-container');
    const scoreBoardEl = document.getElementById('score-board');
    resultContainer.innerHTML = `<h2>Quiz Completed!</h2>`;
    scoreBoardEl.innerHTML = `Final Score: ${score} / ${quizData.length}`;
  }
  let timeLeft = 60; // Set timer for 60 seconds
const timerDisplay = document.getElementById('time');
let timerInterval;

// Start the timer
function startTimer() {
  timerInterval = setInterval(() => {
    timeLeft--;
    timerDisplay.textContent = timeLeft;

    // When time is up
    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      alert('Time is up!');
      // Add any other actions when the timer ends (e.g., end the quiz)
    }
  }, 1000); // Updates every second
}

// Start the timer when the quiz starts
startTimer();