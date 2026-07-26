import CourseLayout from "../../components/course/CourseLayout";
import lessons from "./data/lessons";

function TurnitinHome() {
  return (
    <CourseLayout
      title="Turnitin"
      lessons={lessons}
    />
  );
}

export default TurnitinHome;