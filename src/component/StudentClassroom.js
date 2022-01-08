import React, { useState} from "react";
import axios from "axios";

function StudentClassroom() {
  const [studentName, setStudentName] = useState([]);
  const [classroomId, setClassroomId] = useState("");
  const [classroomData, setClassroomData] = useState([]);
  const data = { student: studentName };

  const addStudentToClass = async () => {
    await axios
      .get(
        `https://hamon-interviewapi.herokuapp.com/classrooms/${classroomId}?api_key=ec2e8`
      )
      .then((result) => {
        setClassroomData(result.data);
      })
      
      .then(() => {
        if (classroomData.subject) {
          console.log("exist");
        } else {
          console.log("not exist");
          axios.patch(
            `https://hamon-interviewapi.herokuapp.com/classrooms/${classroomId}?api_key=ec2e8`,
            data
          );
        }
      });
  };
  const deleteStudent =()=>{
axios.delete(
  `https://hamon-interviewapi.herokuapp.com/classrooms/${classroomId}?api_key=ec2e8`,{data:{student:studentName}}
);
  }
  return (
    <div>
      <input
        type="number"
        onChange={(e) => setClassroomId(e.target.value)}
        placeholder="Enter Class Room Id to add Student"
      />
      <input
        type="text"
        onChange={(e) => setStudentName(e.target.value)}
        placeholder="Enter Student Name"
      />
      <button onClick={addStudentToClass}>Update Name</button>
      <button onClick={deleteStudent}>Delete Student</button>
    </div>
  );
}

export default StudentClassroom;
