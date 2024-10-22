// Typing via interfaces
const employee = {
    name: 'Michael Williams',
    division: 'Engineering'
};
console.log(employee); // { name: 'Michael Williams', division: 'Engineering' }
const employee2 = {
    name: 'Mary Johnson',
    division: 'Sales'
};
console.log(employee2); // { name: 'Mary Johnson', division: 'Sales' }
const lowLevel = 'Low';
console.log(lowLevel); // Low
const description1 = 'Description one';
console.log(description1); // Description one
const person1 = {
    firstName: 'William',
    lastName: 'Jones'
};
console.log(person1); // { firstName: 'William', lastName: 'Jones' }
class Company {
    constructor(name, numEmployees) {
        this.name = name;
        this.numEmployees = numEmployees;
    }
    getName() {
        return this.name;
    }
    getNumEmployees() {
        return this.numEmployees;
    }
    getDetails() {
        return `${this.name}, ${this.numEmployees}`;
    }
    getSummary() {
        return `The company ${this.name} has ${this.numEmployees} employees.`;
    }
}
