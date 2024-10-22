// TODO: Add comments as indicated in the code comments below


// TODO: What is wrong with the following code? How would you correct it?

interface Coordinate {
  x: number;
}

interface Coordinate {
  y: number;
}

const coordinate1: Coordinate = {
  x: 100,
  y: 200
};

console.log(coordinate1);


// TODO: Explain the following code throughout. 
//What is the difference between 
//the `fullName` and `teamMember` objects?

interface FullName {
  //fullName interface with properties firstName
  //   and lastName of type string 
  firstName: string;
  lastName: string;
}

const fullName: FullName = {
  firstName: 'First',
  lastName: 'Last',
};
//interface defines the properties
// firstName and lastName
//of type string
//diffrerence between fullName and teamMember
// objects
//is that teamMember object has an additional
// property
//teamName of type string

class TeamMember implements FullName {
  //here we are implementing the FullName interface 
    //in the TeamMember class and we are 
    //defining the properties
  firstName: string;
  lastName: string;
  teamName: string;

  constructor(
    firstName: string,
    lastName: string,
    teamName: string
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.teamName = teamName;
  }
}

const teamMember: TeamMember = {
  firstName: 'john',
  lastName: 'alex',
  teamName: "ec2"
};
 console.log(teamMember);
 
