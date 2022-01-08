import "./App.css";

import Students from "./component/Students";
import Subjects from "./component/Subjects";
import Classrooms from "./component/Classrooms";
import SubjectClassroom from "./component/SubjectClassroom";
import StudentClassroom from "./component/StudentClassroom";

function App() {
  return (
    <div className="App">
      <Students />
      <Subjects />
      <Classrooms />
      <SubjectClassroom />
      <StudentClassroom />
    </div>
  );
}

export default App;
