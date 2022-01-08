import React, { useState } from "react";
import axios from "axios";
function SubjectClassroom() {
  const [subjectNo, setSubjectNo] = useState([]);
  const data = {subject : subjectNo}
  console.log("data form sub to clas",data);
  const addSubjectToClass = () => {
      axios.patch(
        `https://hamon-interviewapi.herokuapp.com/classrooms/${subjectNo}?api_key=ec2e8`,data
      );
  };
  return (
    <div>
      <input
        type="number"
        value={subjectNo}
        onChange={(e) => setSubjectNo(e.target.value)}
        placeholder="Enter Subject to add Class"
      />
      <button onClick={addSubjectToClass}>Add subject</button>
    </div>
  );
}

export default SubjectClassroom;
