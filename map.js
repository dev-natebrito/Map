
let newStudent = (name, age) => {
    return { name, age }
  }
  
  let students = [
    newStudent("Nate", 20),
    newStudent("Luna", 19),
    newStudent("Nathan", 20),
    newStudent("Beatriz", 19)
  ];
  function idStudent(){
      idStudent=[];
      for(let student of students){
          idStudent.push(`${student.name} is ${student.age}`);

      }
      return idStudent;
  }
  //Map
function nameAge(student){
  return `${student.name} is ${student.age}`;
}

  console.log(students);
  console.log(idStudent());
  console.log(students.map(nameAge));