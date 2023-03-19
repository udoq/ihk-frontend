import { useState } from "react";
import ChoiceBar from "./components/ChoiceBar";
import Student from "./components/Student";

const INITIAL_COURSES = [
  { id: "1", title: "Datenbanken" },
  { id: "2", title: "Requirement Engineering" },
  { id: "3", title: "Systemprogrammierung" },
];

function App() {
  const [courses, setCourses] = useState(INITIAL_COURSES);
  return (
    <div>
      <div className="mt-5 ml-2">
        <ul>
          {courses.map((course) => (
            <ChoiceBar title={course.title} id={course.id} />
          ))}
        </ul>
      </div>
      <div className="mt-10 mx-2">
        <Student></Student>
      </div>
    </div>
  );
}

export default App;
