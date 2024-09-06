const body = document.body;
const h1El = document.createElement('h1');
const infoEl = document.createElement('div');
const imgEl = document.createElement('img');
const kittenEl = document.createElement('div');
const nameEl = document.createElement('div');
const favoriteEl = document.createElement('div');
// Create ordered list element
const listEl = document.createElement('ol');
// Create ordered list items
const li1 = document.createElement('li');
const li2 = document.createElement('li');
const li3 = document.createElement('li');
const li4 = document.createElement('li');

h1El.textContent = 'Welcome to my page';
kittenEl.textContent = 'This is my kitten 🐱.';
nameEl.textContent = 'His name is Jax.';
favoriteEl.textContent = 'My favorite foods are:';

body.appendChild(h1El);
body.appendChild(infoEl);
infoEl.appendChild(imgEl);
infoEl.appendChild(kittenEl);
infoEl.appendChild(nameEl);
body.appendChild(favoriteEl);
// Append ordered list
favoriteEl.appendChild(listEl);
// Define the favorite foods
li1.textContent = 'Pizza';
li2.textContent = 'Sushi';
li3.textContent = 'Burgers';
li4.textContent = 'Ice Cream';


h1El.setAttribute('style', 'margin:auto; width:50%; text-align:center;');
infoEl.setAttribute('style', 'margin:auto; width:50%; text-align:center;');
imgEl.setAttribute('src', '../images/kitten.jpg');
nameEl.setAttribute('style', 'font-size:25px; text-align:center;');
kittenEl.setAttribute('style', 'font-size:25px; text-align:center;');
favoriteEl.setAttribute('style', 'font-size:20px;');
body.appendChild(h1El);
body.appendChild(infoEl);
infoEl.appendChild(imgEl);
infoEl.appendChild(kittenEl);
infoEl.appendChild(nameEl);
body.appendChild(favoriteEl);
// Append ordered list and list items
favoriteEl.appendChild(listEl);
listEl.appendChild(li1);
listEl.appendChild(li2);
listEl.appendChild(li3);
listEl.appendChild(li4);
// TODO: Add ordered list items containing four favorite foods

//Style the ordered list
listEl.setAttribute('style', 'background-color:#333333; padding:20px;');

// Style the list items with different background colors
li1.setAttribute('style', 'color:white; padding:5px; margin-left:35px; background-color:#ff6347;'); // Tomato
li2.setAttribute('style', 'color:white; padding:5px; margin-left:35px; background-color:#ffa500;'); // Orange
li3.setAttribute('style', 'color:white; padding:5px; margin-left:35px; background-color:#32cd32;'); // Lime Green
li4.setAttribute('style', 'color:white; padding:5px; margin-left:35px; background-color:#1e90ff;'); // Dodger Blue