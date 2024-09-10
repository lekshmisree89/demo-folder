//CREATE
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

//const favfoods =['ice','pizza'];
//for (let i=0;i<favfoods.length;i++){
    //ood =favfoods[i]

//BUILD
h1El.textContent = 'Welcome to my page';
kittenEl.textContent = 'This is my kitten 🐱.';
nameEl.textContent = 'His name is Jax.';
favoriteEl.textContent = 'My favorite foods are:';


h1El.setAttribute('style', 'margin:auto; width:50%; text-align:center;');
infoEl.setAttribute('style', 'margin:auto; width:50%; text-align:center;');
imgEl.setAttribute('src', '../images/kitten.jpg');
nameEl.setAttribute('style', 'font-size:25px; text-align:center;');
kittenEl.setAttribute('style', 'font-size:25px; text-align:center;');
favoriteEl.setAttribute('style', 'font-size:20px;');



//Style  for the ordered list

li1.textContent = 'Pizza';
li2.textContent = 'Banana';
li3.textContent = 'Chicken';
li4.textContent = 'Ice Cream';

listEl.setAttribute('style', 'background-color:#333; padding:20px;');

// Style the list items with different background colors
li1.setAttribute('style', 'color:white; padding:5px; margin-left:35px; background-color:green;'); 
li2.setAttribute('style', 'color:white; padding:5px; margin-left:35px; background-color:lemon-chiffon;'); 
li3.setAttribute('style', 'color:white; padding:5px; margin-left:35px; background-color:orange;'); 
li4.setAttribute('style', 'color:white; padding:5px; margin-left:35px; background-color:blue;');

//PLACE

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

