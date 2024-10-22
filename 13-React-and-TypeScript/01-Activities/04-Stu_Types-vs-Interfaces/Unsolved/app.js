// TODO: Add comments as indicated in the code comments below
const coordinate1 = {
    x: 100,
    y: 200
};
console.log(coordinate1);
const fullName = {
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
class TeamMember {
    constructor(firstName, lastName, teamName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.teamName = teamName;
    }
}
const teamMember = {
    firstName: 'john',
    lastName: 'alex',
    teamName: "ec2"
};
console.log(teamMember);
