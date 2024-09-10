const todoInput = document.querySelector('#todo-text');
const todoForm = document.querySelector('#todo-form');
const todoList = document.querySelector('#todo-list');
const todoCountSpan = document.querySelector('#todo-count');

let todos = []; 
// TODO: What is the purpose of this function?
// The purpose of `renderTodos` is to update the UI to display the current list of todos.
// It also updates the count of todos shown on the page.
function renderTodos() {
  // TODO: Describe the functionality of the following two lines of code.
  todoList.innerHTML = ''; // Clears the existing list items in the `todoList` element.
  todoCountSpan.textContent = todos.length; // Updates the `todoCountSpan` with 
  //the number of todos.

  // TODO: Describe the functionality of the following `for` loop.
  for (let i = 0; i < todos.length; i++) {
    const todo = todos[i];

    const li = document.createElement('li'); // Creates a new list
    // item element.
    li.textContent = todo; // Sets the text content of the list item to the todo item.
    li.setAttribute('data-index', i); // Stores the index of the todo
    // in a data attribute for reference.

    const button = document.createElement('button'); // Creates a new button element.
    button.textContent = 'Complete ✔️'; // Sets the text content of the button.

    li.appendChild(button); // Appends the button to the list item.
    todoList.appendChild(li); // Appends the list item to the `todoList` element.
  }
}

// TODO: What is the purpose of the following function?
// initialize the todo list and loading  stored todos frm local storage 
//and rendering them.
function init() {
  // TODO: What is the purpose of the following line of code?
  const storedTodos = JSON.parse(localStorage.getItem('todos')); 
  // Retrieves and parses the stored todos from local storage.

  // TODO: Describe the functionality of the following `if` statement.
  if (storedTodos !== null) {
    todos = storedTodos; // Updates the `todos` array with 
    //the stored todos if they exist.
  }

  // TODO: Describe the purpose of the following line of code.
  renderTodos(); // Calls renderTodos fn and  display the todos on the page.
}

function storeTodos() {
  // TODO: Describe the purpose of the following line of code.
  //// Stores the current todos array in local storage as a JSON string.

  localStorage.setItem('todos', JSON.stringify(todos)); 
}

// TODO: Describe the purpose of the following line of code.
todoForm.addEventListener('submit', function (event) {
  event.preventDefault(); 

  const todoText = todoInput.value.trim(); 
  // TODO: Describe the functionality of the following `if` statement.
  if (todoText === '') {
    return; // If the input is empty, do nothing and exit the function.
  }

  // TODO: Describe the purpose of the following lines of code.
  todos.push(todoText); // Adds the new todo item to the `todos` array.
  todoInput.value = ''; // Clears the input field.

  // TODO: What will happen when the following functions are called?
  storeTodos(); // Saves the updated todos array to local storage.
  renderTodos(); // Renders the updated list of todos on the page.
});

// TODO: Describe the purpose of the following line of code.
todoList.addEventListener('click', function (event) {
  const element = event.target; // Ggives the clicked element

  // TODO: Describe the functionality of the following `if` statement.
  if (element.matches('button') === true) {
    const index = element.parentElement.getAttribute('data-index'); // Gets the
    // index of the todo from the button's parent element.
    todos.splice(index, 1); // Removes the todo item from the `todos`
    // array at the specified index.

    // TODO: What will happen when the following functions are called?
    storeTodos(); // Saves the updated todos array to local storage.
    renderTodos(); // Renders the updated list of todos on the page.
  }
});

init(); // Initializes the todo list on page load.
