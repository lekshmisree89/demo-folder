const constellations = ['Orion', 'Scorpius', 'Lyra', 'Ursa Major', 'Ursa Minor'];
const planets = ['Earth', 'Saturn', 'Mars', 'Jupiter', 'Uranus', 'Venus'];
const star = 'polaris';

// WRITE YOUR CODE BELOW

constellations.unshift("Canis Major");
console.log(constellations); 
// Output: ['Canis Major', 'Orion', 'Scorpius', 'Lyra', 'Ursa Major', 'Ursa Minor']

planets.splice(planets.indexOf("Venus"), 1);
console.log(planets); 
// Output: ['Earth', 'Saturn', 'Mars', 'Jupiter', 'Uranus']
const galaxy = constellations.concat(planets);
console.log(galaxy); 

const capitalStar = star.toUpperCase();
console.log(capitalStar); 
// Output: 'POLARIS'
