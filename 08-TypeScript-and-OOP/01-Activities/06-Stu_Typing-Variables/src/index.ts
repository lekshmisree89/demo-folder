// Employee Data
let firstName: string = 'Lekshmi';
let lastName: string = 'Sreekumar';
let age: number = 30;
let jobTitle: string = 'engineer';
let salary: number = 70000;
let remoteStatus :unknown;


//* It's done when I run the application and the 
//employee's job title and salary are set.


//* It's done when the employee's first name 
//and last name are combined into one name.
const fullName:string = `${firstName} ${lastName}`;

console.log(fullName);

//It's done when the employee information is logged to
// the console in a formatted template, 
//listing the employee's name, age, job title, and salary.
console.log(`employee information : Name:${fullName} 
Age:${age} 
Job Title:${jobTitle}
Salary: $${salary}`);

//It's done when an employee's remote status is established as unknown. 
//If the status is set to true, the sentence "EMPLOYEE_NAME is 
//working remotely today" is displayed.
// Otherwise, display "EMPLOYEE_NAME is working 
//from the office today."
 if(remoteStatus === null ){
    (`${fullName} status is known`);

 }else if (remoteStatus === true)
 {
    console.log(`${fullName} is working remotely`);
 }
 else{
    console.log(`${fullName} is working from office`);
 }