//dependencies
const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');
const signUpButton = document.querySelector('#sign-up');
const msgDiv = document.querySelector('#msg');
const userEmailSpan = document.querySelector('#user-email');
const userPasswordSpan = document.querySelector('#user-password');



//data
renderLastRegistered();

function displayMessage(type, message) {
  msgDiv.textContent = message;
  msgDiv.setAttribute('class', type);
}

function renderLastRegistered() {
  // TODO: Retrieve the last email and password and render
  // it to the page

  const lastEmail = localStorage.getItem('email');
  const lastPassword = localStorage.getItem('password');

if (lastEmail && lastPassword) {
  userEmailSpan.textContent = lastEmail;
  userPasswordSpan.textContent = lastPassword;
} else {
  userEmailSpan.textContent = '';
  userPasswordSpan.textContent = '';
}

}



signUpButton.addEventListener('click', function (event) {
  event.preventDefault();

  const email = emailInput.value;
  const password = passwordInput.value;

  if (email === '') {
    displayMessage('error', 'Email cannot be blank');
  } else if (password === '') {
    displayMessage('error', 'Password cannot be blank');
  }
    
    // TODO: Save email and password to localStorage and 
    //render the last registered user
  else{
    localStorage.setItem('email', email);
    localStorage.setItem('password', password);
    displayMessage('success', 'Registered successfully');
   
  }
renderLastRegistered();
  

});
renderLastRegistered();
