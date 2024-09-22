const studentList = ['Matt', 'Amy', 'Shane', 'Josh', 'Pria'];

const checkStudentRoster = (arr:string[]): void => {
  arr.forEach((student:string):void => {
    console.log(`${student} is present!`);
  });
};

checkStudentRoster(studentList);

// Why does this function not fail?
studentList.forEach((student:string):void => {
  console.log(`${student} is here!`);
});
