import {
  PlayCircle,
  BookOpen,
  Download,
  ClipboardCheck,
  CircleHelp,
} from "lucide-react";

export default function Dashboard() {
  const modules = [
    {
      title: "Video Lessons",
      icon: <PlayCircle size={28} />,
      description: "Watch Moodle training videos.",
    },
    {
      title: "Step-by-Step Guides",
      icon: <BookOpen size={28} />,
      description: "Learn Moodle one step at a time.",
    },
    {
      title: "Downloads",
      icon: <Download size={28} />,
      description: "Download manuals and templates.",
    },
    {
      title: "Practice Activities",
      icon: <ClipboardCheck size={28} />,
      description: "Complete practical exercises.",
    },
    {
      title: "Quiz",
      icon: <ClipboardCheck size={28} />,
      description: "Test your understanding.",
    },
    {
      title: "FAQ",
      icon: <CircleHelp size={28} />,
      description: "Frequently asked questions.",
    },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold text-slate-800">
          Moodle LMS
        </h1>

        <p className="mt-2 text-gray-600">
          Welcome to the Covenant University Moodle LMS
          onboarding programme.
        </p>
      </div>

      <div className="rounded-xl bg-white p-6 shadow">
        <h2 className="text-xl font-semibold">
          Course Progress
        </h2>

        <div className="mt-4 h-4 rounded-full bg-gray-200">
          <div className="h-4 w-1/4 rounded-full bg-blue-700"></div>
        </div>

        <p className="mt-3 text-gray-500">
          2 of 7 learning modules completed
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {modules.map((module) => (
          <div
            key={module.title}
            className="rounded-xl bg-white p-6 shadow transition hover:shadow-lg"
          >
            <div className="text-blue-700">
              {module.icon}
            </div>

            <h3 className="mt-4 text-xl font-semibold">
              {module.title}
            </h3>

            <p className="mt-2 text-gray-600">
              {module.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}