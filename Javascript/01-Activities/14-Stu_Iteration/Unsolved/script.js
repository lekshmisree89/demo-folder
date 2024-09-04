// WRITE YOUR CODE BELOW

students=['lekshmi','arun','john','jacob','david'];
console.log(students.length);
for(i=0;i<students.length;i++){
    console.log(`Great to see you, ${students[i]} `);
}
for (let student of students) {
    console.log(`Great to see you,${student}!`);
}