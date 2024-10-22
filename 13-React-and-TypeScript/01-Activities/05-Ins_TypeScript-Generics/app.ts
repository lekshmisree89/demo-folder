// Generic functions
// Generic functions are functions that can
// work with a range of types rather 
//than a single type. 
//This allows you to write reusable 
//functions that can be used with different types.

// The following function will not compile
// because the type of value is not known
// at compile time.
const writeToConsole = <T>(value: T) => {
  console.log(value);
} 


writeToConsole(67890);
writeToConsole("Hello Again");
writeToConsole([4, 5, 6]);

// The following function will not compile because 
//
// the toUpperCase method is not available on 
//all types.
const writeToConsoleUpperCase = <T>(value: T) => {
  // Will not compile
  // console.log(value.toUpperCase());
  //because the toUpperCase method is not 
  //available on all types
} 


// Generic types
// Generic types are types that can work with 
//a range of types rather than a single type.
type Organization<T> = {
	name: string;
	location: string;
	members: T;
}

const organization1: Organization<(number)[]> = {
	name: 'Sample Organization',
	location: 'Paris, France',
	members: [111, 222, 333]
}

console.log(organization1); // { name: 'Sample Organization', location: 'Paris, France', members: [ 111, 222, 333 ]}

const organization2: Organization<(string)> = {
  name: 'Another Organization',
  location: 'Brussels, Belgium',
  members: 'Independent'
}

console.log(organization2); // { name: 'Another Organization', location: 'Brussels, Belgium', members: 'Independent' }


// Generic class

class ArrayBuilder<T> {
	private _array: T[] = [];

	add(value: T): void {
		this._array.push(value);
	}

	writeToConsole(): void {
		console.log(this._array);
	}
}

const example = new ArrayBuilder<number>();
example.add(1);
example.add(2);
example.writeToConsole(); // [1, 2]

const example2 = new ArrayBuilder<string>();
example2.add('one');
example2.add('two');
example2.writeToConsole(); // [one, two]
