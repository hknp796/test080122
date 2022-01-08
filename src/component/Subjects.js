import axios from "axios";
import React, { useState } from "react";

function Subjects() {
  const [subjects, setSubjects] = useState([]);
  const [subjectsId, setSubjectsId] = useState([]);
  const getSubjects = () => {
    axios
      .get("https://hamon-interviewapi.herokuapp.com/subjects/?api_key=ec2e8")
      .then((res) => {
        console.log(res.data.subjects);
        setSubjects(res.data.subjects);
      });
  };
  const getSubjectsById = () => {
    axios
      .get(
        `https://hamon-interviewapi.herokuapp.com/subjects/${subjectsId}?api_key=ec2e8`
      )
      .then((res) => {
        console.log(res.data);
        setSubjectsId(res.data.subjects);
      });
  };

  return (
    <div>
      <div>
        <button onClick={getSubjects}> All subjects</button>
        <input
          type="number"
          value={subjectsId}
          placeholder="Enter Subject id"
          onChange={(e) => setSubjectsId(e.target.value)}
        />
      </div>
      <div>
        <button onClick={getSubjectsById}>Subject List by Id</button>
      </div>
      {subjects.map((res)=>{
        return (
          <table>
            <tbody>
              <td>{res.name}</td>
              <td>{res.teacher}</td>
            </tbody>
          </table>
        )
       
      })}
    </div>
  );
}

export default Subjects;
