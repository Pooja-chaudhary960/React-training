import React from "react";

const App = () => {
  const Student = [
    {
      name:"Ram",
      Phone:"9823567890",
      Faculty:"IT",
    },
     {
      name:"Hari",
      Phone:"9823567823",
      Faculty:"Management",
    },
     {
      name:"Sita",
      Phone:"9823567367",
      Faculty:"IT",
    },
     {
      name:"Rita",
      Phone:"9823562346",
      Faculty:"Management",
    },
  ]
   const studentData = Student.map(
    (item) =>`Name=${item.name}, Phone=${item.Phone}, Faculty=${item.Faculty}`).join("\n")

    const ITfaculty= Student.filter(Student=>Student.Faculty==="IT").map(
    (item) =>`Name=${item.name}, Phone=${item.Phone}, Faculty=${item.Faculty}`).join("\n")

    
    const MagtFaculty= Student.filter(Student=>Student.Faculty==="IT").map(
    (item) =>`Name=${item.name}, Phone=${item.Phone}, Faculty=${item.Faculty}`).join("\n")

  //const name="hari"
 /* let marks = Number(prompt("Enter Marks"));
  // let marks=90;
  let result = "";

  if (marks >= 90 && marks <= 100) {
    result = "Grade A+";
  } else if (marks >= 80) {
    result = "Grade A";
  } else if (marks >= 70) {
    result = "Grade B+";
  } else if (marks >= 60) {
    result = "Grade B";
  } else {
    result = "Fail";
  }
  return (
    <div>
      <h1>Marks:{marks}</h1>
      <h2>{result}</h2>
    </div>
  );*/
   return (
    <div style={{ whiteSpace: "pre-line" }}>
      <h3>Student Data:</h3>
     {studentData}
     <div>
      <h3>IT Student Data:</h3>
      {
        ITfaculty
      }
     </div>
      <div>
      <h3>Management Student Data:</h3>
      {
        MagtFaculty
      }
     </div>
    </div>
    
  );

};

export default App;
