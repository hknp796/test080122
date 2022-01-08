import axios from "axios";
import React, { useState } from "react";

export default function Students() {
  const [students, setStudents] = useState([]);
  const [studentid, setStudentId] = useState([]);
  const link = `https://hamon-interviewapi.herokuapp.com/students/${studentid}?api_key=ec2e8`;
  const getStudents =  () => {
  axios
      .get("https://hamon-interviewapi.herokuapp.com/students/?api_key=ec2e8")
      .then((res) => {
        console.log(res.data.students);
        setStudents(res.data.students);
        
      });
     
  };
   const getStudentsById = () => {
     axios.get(link).then((res) => {
       console.log(res.data);
       setStudents(res.data);
     });
   };
  return (
    <div>
      <input type="button" value="All Students List" onClick={getStudents} />
      <br />
      <input
        type="number"
        value={studentid}
        placeholder="Enter Student id"
        onChange={(e) => setStudentId(e.target.value)}
      />
      <input
        type="button"
        value="students List by Id"
        onClick={getStudentsById}
      />
      {students.map((res,index) => {
        return(
        <table>
          <tbody key={index}>
            <td>{res.name}</td>
            <td>{res.email}</td>
            <td>{res.age}</td>
          </tbody>
          

        </table>
        )
      })}
    </div>
  );
}
