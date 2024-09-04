// WRITE YOUR CODE HERE
const students= [ 'lekshmi','arun','appu','achu','jacob'];

console.log(students.length);

console.log(`welcome to the class ${students[0]}`);
console.log(`welcome to the class ${students[1]}`);
console.log(`welcome to the class ${students[2]}`);
console.log(`welcome to the class ${students[3]}`);



let newStudent;


newStudent ='john';
students[0]=newStudent;
    
console.log(students);


if (students[0] === newStudent)
{
    console.log(`${newStudent} is in the class`)
}