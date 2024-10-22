// Generic functions
// Generic functions are functions that can
// work with a range of types rather 
//than a single type. 
//This allows you to write reusable 
//functions that can be used with different types.
// The following function will not compile
// because the type of value is not known
// at compile time.
const writeToConsole = (value) => {
    console.log(value);
};
writeToConsole(67890);
writeToConsole("Hello Again");
writeToConsole([4, 5, 6]);
const writeToConsoleUpperCase = (value) => {
    // Will not compile
    // console.log(value.toUpperCase());
};
const organization1 = {
    name: 'Sample Organization',
    location: 'Paris, France',
    members: [111, 222, 333]
};
console.log(organization1); // { name: 'Sample Organization', location: 'Paris, France', members: [ 111, 222, 333 ]}
const organization2 = {
    name: 'Another Organization',
    location: 'Brussels, Belgium',
    members: 'Independent'
};
console.log(organization2); // { name: 'Another Organization', location: 'Brussels, Belgium', members: 'Independent' }
// Generic class
class ArrayBuilder {
    constructor() {
        this._array = [];
    }
    add(value) {
        this._array.push(value);
    }
    writeToConsole() {
        console.log(this._array);
    }
}
const example = new ArrayBuilder();
example.add(1);
example.add(2);
example.writeToConsole(); // [1, 2]
const example2 = new ArrayBuilder();
example2.add('one');
example2.add('two');
example2.writeToConsole(); // [one, two]
