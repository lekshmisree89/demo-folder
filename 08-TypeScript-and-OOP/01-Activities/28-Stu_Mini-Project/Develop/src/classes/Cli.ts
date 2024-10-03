import inquirer from 'inquirer';
import Animal from "./Animal.js";
import type Employee from './Employee.js';
import ZooKeeper from './ZooKeeper.js';
import ZooWorker from './ZooWorker.js';

class Cli {
  animals: Animal[];
  employees: Employee[];

  constructor(animals: Animal[], employees: Employee[]) {
    this.animals = animals;
    this.employees = employees;
  }

  startCli(): void {
    inquirer
      .prompt([
        {
          type: 'list',
          name: 'action',
          message: 'What do you want to do?',
          choices: [
            'Add Animals to Zoo',
            'Add new Employee',
            'See Animal List',
            'See Employee List',
            'Feed Animals',
            'Pay Employee',
            'Exit',
          ],
        },
      ])
      .then((res) => {
        // Switch statement for the different options on inquirer.
        switch (res.action) {
          case 'Add Animals to Zoo':
            this.startAnimalCli();
            break;
          case 'Add new Employee':
            this.startEmployeeCli();
            break;
          case 'See Animal List':
            console.log(this.animals);
            this.startCli();
            break;
          case 'See Employee List':
            console.log(this.employees);
            this.startCli(); // Recursive call to go back to main menu.
            break;
          case 'Feed Animals':
            this.feedAnimals();
            break;
          case 'Pay Employee':
            this.payEmployee();
            break;
          default:
            process.exit(0);
        }
      });
  }

  // Update the startAnimalCli() method to create an Animal object and push to the animals array
  startAnimalCli(): void {
    inquirer
      .prompt([
        {
          type: 'input',
          name: 'species',
          message: 'What is the species of the animal?',
        },
        {
          type: 'confirm',
          name: 'hungry',
          message: 'Is the animal hungry?',
        },
        {
          type: 'number',
          name: 'weight',
          message: 'What is the weight of the animal?',
        },
        {
          type: 'number',
          name: 'amount',
          message: 'How many of this species are there?',
        },
      ])
      .then((res) => {
        const newAnimal = new Animal(res.species, res.hungry, res.weight, res.amount);
        this.animals.push(newAnimal);
        console.log(`Added ${newAnimal.species} to zoo!`);
        this.startCli();
      });
  }
  //.then(res :Zooanimals)=>{

  //}
//
  startEmployeeCli(): void {
    inquirer
      .prompt([
        {
          type: 'list',
          name: 'employeeChoice',
          message: 'Which employee department do you want to access?',
          choices: ['Zoo Keeper', 'Zoo Worker'],
        },
      ])
      .then((res) => {
        if (res.employeeChoice === 'Zoo Keeper') {
          this.startZooKeeperCli();
        } else {
          this.startZooWorkerCli();
        }
      });
  }

  // Update the startZooKeeperCli() method to create an Employee object and push to the employees array
  startZooKeeperCli(): void {
    inquirer
      .prompt([
        {
          type: 'input',
          name: 'name',
          message: 'What is their name?',
        },
        {
          type: 'input',
          name: 'id',
          message: 'What is their ID number?',
        },
        {
          type: 'input',
          name: 'title',
          message: 'What is their title?',
        },
        {
          type: 'number',
          name: 'salary',
          message: 'What is their salary?',
        },
        {
          type: 'input',
          name: 'specialization',
          message: 'What is their area of specialization?',
        },
      ])
      .then((res) => {
        const newZooKeeper = new ZooKeeper(
          res.name,
          res.id,
          res.title,
          res.salary,
          res.specialization
        );
        console.log(`Please welcome to the team: ${newZooKeeper.name}!`);
        this.employees.push(newZooKeeper);
        this.startCli();
      });
  }

  startZooWorkerCli(): void {
    inquirer
      .prompt([
        {
          type: 'input',
          name: 'name',
          message: 'What is their name?',
        },
        {
          type: 'input',
          name: 'id',
          message: 'What is their ID number?',
        },
        {
          type: 'input',
          name: 'title',
          message: 'What is their title?',
        },
        {
          type: 'number',
          name: 'salary',
          message: 'What is their salary?',
        },
        {
          type: 'confirm',
          name: 'uniform',
          message: 'Is their uniform clean?',
        },
      ])
      .then((res) => {
        const newZooWorker = new ZooWorker(
          res.name,
          res.id,
          res.title,
          res.salary,
          res.uniform
        );
        console.log(`Please welcome to the team: ${newZooWorker.name}!`);
        this.employees.push(newZooWorker);
        this.startCli();
      });
  }

  // Update the feedAnimals() method to iterate through the animals array and if the animal is hungry, console the species will be fed.
  feedAnimals(): void {
    this.animals.forEach(animal => {
      if (animal.hungry) {
        console.log(`The ${animal.species} will be fed.`);
      }
    });
    this.startCli();
  }

  payEmployee(): void {
    inquirer
      .prompt([
        {
          type: 'input',
          name: 'name',
          message: 'Who do you want to pay? Input name precisely',
        },
        {
          type: 'number',
          name: 'pay',
          message: 'How much do you want to pay?',
        },
      ])
      .then((res) => {
        const employee = this.employees.find(emp => emp.name === res.name);
        if (employee) {
          const totalPay = employee.receivePay(res.pay);
          console.log(`${employee.name} has been paid $${totalPay}.`);
        } else {
          console.log('Employee not found.');
        }
        this.startCli();
      });
  }
}

export default Cli;
