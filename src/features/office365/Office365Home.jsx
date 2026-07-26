import CourseLayout from "../../components/course/CourseLayout";
import lessons from "./data/lessons";

function Office365Home() {
  return (
    <CourseLayout
      title="Office 365"
      lessons={lessons}
    />
  );
}

export default Office365Home;