import { useState } from "react";

import CourseSidebar from "./CourseSidebar";

function CourseLayout({ title, lessons }) {
  const [currentLessonId, setCurrentLessonId] = useState(
    lessons[0]?.id || 1
  );

  const currentLesson =
    lessons.find((lesson) => lesson.id === currentLessonId) ||
    lessons[0];

  return (
    <div className="flex h-full">

      <CourseSidebar
        title={title}
        lessons={lessons}
        currentLesson={currentLessonId}
        onSelectLesson={setCurrentLessonId}
      />

      <div className="flex-1 p-8 bg-white">
        <h1 className="text-4xl font-bold text-blue-700">
          Moodle LMS
        </h1>

        <p className="mt-4">
          Current Lesson:
        </p>

        <pre>{JSON.stringify(currentLesson, null, 2)}</pre>
      </div>

    </div>
  );
}

export default CourseLayout;