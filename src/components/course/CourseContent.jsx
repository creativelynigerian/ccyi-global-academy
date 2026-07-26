function CourseContent({ lesson }) {
  if (!lesson) {
    return (
      <main className="flex-1 flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-700">
            No lesson selected
          </h2>
          <p className="mt-2 text-gray-500">
            Please select a lesson from the sidebar.
          </p>
        </div>
      </main>
    );
  }

  return (
    <main className="flex-1 overflow-y-auto bg-gray-50 p-8">
      <div className="mx-auto max-w-5xl">

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-slate-800">
            {lesson.title}
          </h1>

          <p className="mt-3 text-lg text-gray-600">
            {lesson.description}
          </p>

          <div className="mt-4 flex gap-4">
            <span className="rounded-full bg-blue-100 px-4 py-2 text-sm text-blue-700">
              {lesson.duration}
            </span>

            <span className="rounded-full bg-green-100 px-4 py-2 text-sm text-green-700">
              {lesson.difficulty}
            </span>
          </div>
        </div>

        {/* Objectives */}
        <section className="mb-8 rounded-2xl bg-white p-8 shadow">
          <h2 className="mb-4 text-2xl font-bold">
            Learning Objectives
          </h2>

          <ul className="space-y-3">
            {(lesson.objectives || []).map((objective, index) => (
              <li key={index} className="flex gap-3">
                <span className="font-bold text-blue-700">✓</span>
                <span>{objective}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Video */}
        <section className="mb-8 rounded-2xl bg-white p-8 shadow">
          <h2 className="mb-4 text-2xl font-bold">
            Video Lesson
          </h2>

          <div className="mx-auto aspect-video max-w-4xl overflow-hidden rounded-xl shadow-lg">
            <iframe
              className="h-full w-full"
              src={lesson.video}
              title={lesson.title}
              allowFullScreen
            />
          </div>
        </section>

        {/* Resources */}
        <section className="mb-8 rounded-2xl bg-white p-8 shadow">
          <h2 className="mb-4 text-2xl font-bold">
            Lesson Resources
          </h2>

          <a
            href={lesson.pdf}
            className="inline-block rounded-lg bg-blue-700 px-6 py-3 text-white hover:bg-blue-800"
          >
            Download PDF Guide
          </a>
        </section>

      </div>
    </main>
  );
}

export default CourseContent;