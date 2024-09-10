const container = document.querySelector('.container');

container.addEventListener('click', function (event) {
  console.log(event);
  const element = event.target;

  
  if (element.matches('.box')) {
    
    const currentState = element.getAttribute('data-state');
    
    if (currentState === 'hidden') {

      const number = element.getAttribute('data-number');
      element.textContent = number;
      element.setAttribute('data-state', 'visible');
    } 
    else{
      element.textContent = ' ';
      element.setAttribute('data-state', 'hidden');
    }
    
  }
});



