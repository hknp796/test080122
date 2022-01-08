import axios from "axios";
import React, { useState } from "react";
function Classrooms() {
  const [classrooms, setClassrooms] = useState([]);
  const [classroomsId, setClassroomsById] = useState([]);
  const getClassrooms = () => {
    axios
      .get("https://hamon-interviewapi.herokuapp.com/classrooms/?api_key=ec2e8")
      .then((res) => {
        setClassrooms(res.data.classrooms);
        console.log(res.data.classrooms);
      });
  };
  const getClassroomsById = () => {
    axios
      .get(
        `https://hamon-interviewapi.herokuapp.com/classrooms/${classroomsId}?api_key=ec2e8`
      )
      .then((res) => {
        setClassrooms(res.data);
        console.log(res.data);
      });
  };

  return (
    <div>
      <input type="button" value="Classrooms" onClick={getClassrooms} /><br/>
      <input
        type="number"
        value={classroomsId}
        placeholder="Enter Student id"
        onChange={(e) => setClassroomsById(e.target.value)}
      />
      <input
        type="button"
        value="Classroom List by Id"
        onClick={getClassroomsById}
      />
      {classrooms.map((res)=>{
          return(
              <div>
            <h4>{res.layout}</h4>
            <h4>{res.name}</h4>
            <h4>{res.size}</h4>
            </div>
          )
      })}
    </div>
  );
}

export default Classrooms;
