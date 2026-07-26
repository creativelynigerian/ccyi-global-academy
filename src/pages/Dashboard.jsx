import { Link } from "react-router-dom";

export default function Dashboard() {
  // Mock data - replace with real data later
  const modules = [
    { id: 1, title: "Moodle", icon: "📚", progress: 75, status: "In Progress" },
    { id: 2, title: "Office 365", icon: "💼", progress: 50, status: "In Progress" },
    { id: 3, title: "Grammarly", icon: "✍️", progress: 0, status: "Not Started" },
    { id: 4, title: "Turnitin", icon: "🔍", progress: 0, status: "Not Started" },
    { id: 5, title: "Internet Login", icon: "🌐", progress: 100, status: "Completed" },
    { id: 6, title: "Certificate", icon: "🎓", progress: 0, status: "Locked" },
  ];

  const stats = [
    { label: "Total Modules", value: 6, icon: "📚" },
    { label: "Completed", value: 1, icon: "✅" },
    { label: "In Progress", value: 2, icon: "🔄" },
    { label: "Overall Progress", value: "21%", icon: "📈" },
  ];

  return (
    <div className="space-y-8">
      {/* Welcome Section */}
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#002147] via-blue-900 to-indigo-700 p-10 text-white shadow-xl">
        <div className="relative z-10">
          <h1 className="text-4xl font-bold">Welcome Back! 👋</h1>
          <p className="mt-2 text-2xl text-blue-100">
            Faculty Digital Onboarding Portal
          </p>
          <p className="mt-4 max-w-2xl text-lg text-blue-100/80">
            Complete your onboarding journey and master the digital platforms 
            used across Covenant University.
          </p>

          {/* Progress Bar */}
          <div className="mt-6 max-w-md">
            <div className="mb-2 flex justify-between text-sm">
              <span>Overall Progress</span>
              <span>21%</span>
            </div>
            <div className="h-3 overflow-hidden rounded-full bg-blue-800">
              <div className="h-full w-[21%] rounded-full bg-yellow-400"></div>
            </div>
          </div>

          <Link
            to="/moodle"
            className="mt-6 inline-block rounded-xl bg-yellow-400 px-8 py-3 font-semibold text-[#002147] transition hover:bg-yellow-300 hover:scale-105"
          >
            Continue Learning →
          </Link>
        </div>
        {/* Decorative elements */}
        <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-yellow-400/20 blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-blue-400/20 blur-3xl"></div>
      </section>

      {/* Statistics */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, index) => (
          <div key={index} className="rounded-xl bg-white p-6 shadow-md transition hover:shadow-lg">
            <div className="flex items-center justify-between">
              <span className="text-2xl">{stat.icon}</span>
              <span className={`text-sm font-medium ${
                stat.label === "Completed" ? "text-green-600" :
                stat.label === "In Progress" ? "text-orange-500" :
                stat.label === "Overall Progress" ? "text-blue-600" :
                "text-gray-600"
              }`}>
                {stat.label}
              </span>
            </div>
            <p className="mt-2 text-3xl font-bold text-[#002147]">{stat.value}</p>
          </div>
        ))}
      </div>

      {/* Training Modules */}
      <section>
        <h2 className="mb-6 text-2xl font-bold text-[#002147]">Training Modules</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {modules.map((module) => (
            <div
              key={module.id}
              className="rounded-xl bg-white p-6 shadow-md transition hover:shadow-lg hover:scale-105"
            >
              <div className="flex items-center justify-between">
                <span className="text-3xl">{module.icon}</span>
                <span className={`text-xs font-medium px-2 py-1 rounded-full ${
                  module.status === "Completed" ? "bg-green-100 text-green-700" :
                  module.status === "In Progress" ? "bg-blue-100 text-blue-700" :
                  module.status === "Locked" ? "bg-gray-100 text-gray-500" :
                  "bg-gray-100 text-gray-500"
                }`}>
                  {module.status}
                </span>
              </div>
              <h4 className="mt-3 text-lg font-semibold text-[#002147]">{module.title}</h4>
              <div className="mt-3">
                <div className="flex justify-between text-sm text-gray-500">
                  <span>Progress</span>
                  <span>{module.progress}%</span>
                </div>
                <div className="mt-1 h-2 overflow-hidden rounded-full bg-gray-200">
                  <div
                    className={`h-full rounded-full ${
                      module.progress === 100 ? "bg-green-500" :
                      module.progress > 0 ? "bg-blue-600" :
                      "bg-gray-300"
                    }`}
                    style={{ width: `${module.progress}%` }}
                  ></div>
                </div>
              </div>
              <Link
                to={`/${module.title.toLowerCase().replace(/\s/g, '')}`}
                className={`mt-4 block w-full rounded-lg px-4 py-2 text-center text-sm font-medium transition ${
                  module.status === "Locked"
                    ? "cursor-not-allowed bg-gray-200 text-gray-400"
                    : "bg-[#002147] text-white hover:bg-blue-900"
                }`}
                onClick={(e) => {
                  if (module.status === "Locked") e.preventDefault();
                }}
              >
                {module.status === "Locked" ? "🔒 Locked" :
                 module.status === "Completed" ? "Review" :
                 "Continue →"}
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}