import React from "react";
import {
  Mail,
  Calendar,
  Users,
  Cloud,
  FileText,
  Table,
  Presentation,
  NotebookPen,
  Bot,
  ExternalLink,
} from "lucide-react";

const apps = [
  {
    name: "Outlook",
    icon: Mail,
    color: "bg-blue-600",
    description: "Email and communication",
    url: "https://outlook.office.com",
  },
  {
    name: "Teams",
    icon: Users,
    color: "bg-purple-600",
    description: "Meetings and collaboration",
    url: "https://teams.microsoft.com",
  },
  {
    name: "OneDrive",
    icon: Cloud,
    color: "bg-sky-600",
    description: "Cloud storage",
    url: "https://onedrive.live.com",
  },
  {
    name: "Calendar",
    icon: Calendar,
    color: "bg-green-600",
    description: "Schedule meetings",
    url: "https://outlook.office.com/calendar",
  },
  {
    name: "Word",
    icon: FileText,
    color: "bg-blue-700",
    description: "Create documents",
    url: "https://www.office.com/launch/word",
  },
  {
    name: "Excel",
    icon: Table,
    color: "bg-green-700",
    description: "Spreadsheets",
    url: "https://www.office.com/launch/excel",
  },
  {
    name: "PowerPoint",
    icon: Presentation,
    color: "bg-orange-600",
    description: "Presentations",
    url: "https://www.office.com/launch/powerpoint",
  },
  {
    name: "OneNote",
    icon: NotebookPen,
    color: "bg-violet-700",
    description: "Digital notebook",
    url: "https://www.office.com/launch/onenote",
  },
  {
    name: "Microsoft Copilot",
    icon: Bot,
    color: "bg-indigo-700",
    description: "AI Assistant",
    url: "https://copilot.microsoft.com",
  },
];

export default function Office365() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div className="mb-8 rounded-2xl bg-[#002147] p-8 text-white shadow-lg">
          <h1 className="text-4xl font-bold">
            Microsoft 365 Dashboard
          </h1>

          <p className="mt-2 text-blue-200">
            Access your CCYI Global Academy Microsoft services.
          </p>
        </div>

        {/* Apps */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

          {apps.map((app) => {
            const Icon = app.icon;

            return (
              <div
                key={app.name}
                className="rounded-xl bg-white p-6 shadow transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div
                  className={`mb-4 flex h-16 w-16 items-center justify-center rounded-xl ${app.color}`}
                >
                  <Icon className="text-white" size={30} />
                </div>

                <h2 className="text-2xl font-bold">
                  {app.name}
                </h2>

                <p className="mt-2 text-gray-600">
                  {app.description}
                </p>

                <a
                  href={app.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-2 rounded-lg bg-[#002147] px-5 py-3 text-white hover:bg-blue-900"
                >
                  Open App
                  <ExternalLink size={18} />
                </a>
              </div>
            );
          })}

        </div>

      </div>
    </div>
  );
}