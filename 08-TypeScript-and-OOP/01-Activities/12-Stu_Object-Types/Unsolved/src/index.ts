// TODO: create a cat object called 'cat' with the following properties:
// name: string, age: number, pattern: string, 
//isSleepy (optional) : boolean, and siblings (optional) : string[]

// TODO: console.log the cat's siblings if they exist
// TODO: create a cat object called 'cat' with the specified properties
const cat: { 
    name: string; 
    age: number; 
    pattern: string; 
    isSleepy?: boolean; 
    siblings?: string[] 
} = {
    name: "Billy",
    age: 2,
    pattern: "bicolor",
    isSleepy: true,
    //siblings: ["Silly", "Oreo"]
};


// TODO: console.log the cat object
console.log(cat);


// TODO: console.log the cat's siblings if they exist

console.log(cat.siblings ? cat.siblings :(`${cat.name} has no  siblings.`));

