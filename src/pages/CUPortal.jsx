import React from "react";
import {
  User,
  BookOpen,
  CalendarDays,
  CreditCard,
  GraduationCap,
  Bell,
  ArrowRight,
} from "lucide-react";

const quickActions = [
  { title: "Course Registration", icon: BookOpen },
  { title: "View Results", icon: GraduationCap },
  { title: "Pay School Fees", icon: CreditCard },
  { title: "Lecture Timetable", icon: CalendarDays },
];

export default function CUPortal() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div className="mb-8 rounded-2xl bg-[#002147] p-8 text-white shadow-lg">
          <h1 className="text-4xl font-bold">
            Covenant University Portal
          </h1>

          <p className="mt-2 text-blue-200">
            Welcome to your academic dashboard.
          </p>
        </div>

        {/* Profile + Stats */}
        <div className="mb-8 grid gap-6 lg:grid-cols-4">

          <div className="rounded-xl bg-white p-6 shadow">
            <User className="mb-4 text-blue-700" size={36} />
            <h2 className="text-xl font-bold">Student</h2>
            <p className="text-gray-600">Kay Daniels</p>
            <p className="text-sm text-gray-500">
              24CD12345
            </p>
          </div>

          <div className="rounded-xl bg-white p-6 shadow">
            <BookOpen className="mb-4 text-green-600" size={36} />
            <h2 className="text-3xl font-bold">8</h2>
            <p className="text-gray-600">
              Registered Courses
            </p>
          </div>

          <div className="rounded-xl bg-white p-6 shadow">
            <GraduationCap className="mb-4 text-purple-600" size={36} />
            <h2 className="text-3xl font-bold">4.62</h2>
            <p className="text-gray-600">
              Current GPA
            </p>
          </div>

          <div className="rounded-xl bg-white p-6 shadow">
            <CreditCard className="mb-4 text-orange-600" size={36} />
            <h2 className="text-3xl font-bold text-green-600">
              Paid
            </h2>
            <p className="text-gray-600">
              Fee Status
            </p>
          </div>

        </div>

        {/* Main Content */}
        <div className="grid gap-8 lg:grid-cols-3">

          {/* Quick Actions */}
          <div className="lg:col-span-2 rounded-xl bg-white p-8 shadow">

            <h2 className="mb-6 text-2xl font-bold">
              Quick Actions
            </h2>

            <div className="grid gap-5 md:grid-cols-2">

              {quickActions.map((action) => {
                const Icon = action.icon;

                return (
                  <button
                    key={action.title}
                    className="flex items-center justify-between rounded-xl border p-5 transition hover:border-blue-700 hover:bg-blue-50"
                  >
                    <div className="flex items-center gap-4">
                      <Icon
                        className="text-blue-700"
                        size={30}
                      />

                      <span className="font-semibold">
                        {action.title}
                      </span>
                    </div>

                    <ArrowRight size={20} />
                  </button>
                );
              })}

            </div>

          </div>

          {/* Announcements */}
          <div className="rounded-xl bg-white p-8 shadow">

            <div className="mb-5 flex items-center gap-3">
              <Bell className="text-red-600" />
              <h2 className="text-2xl font-bold">
                Announcements
              </h2>
            </div>

            <div className="space-y-4">

              <div className="rounded-lg bg-blue-50 p-4">
                <h3 className="font-semibold">
                  Course Registration
                </h3>
                <p className="text-sm text-gray-600">
                  Registration closes on Friday.
                </p>
              </div>

              <div className="rounded-lg bg-green-50 p-4">
                <h3 className="font-semibold">
                  Examination Timetable
                </h3>
                <p className="text-sm text-gray-600">
                  Alpha Semester timetable is now available.
                </p>
              </div>

              <div className="rounded-lg bg-yellow-50 p-4">
                <h3 className="font-semibold">
                  ICT Maintenance
                </h3>
                <p className="text-sm text-gray-600">
                  Internet services may be interrupted on Saturday from 10:00 PM to 12:00 AM.
                </p>
              </div>

            </div>

          </div>

        </div>

        {/* Today's Schedule */}
        <div className="mt-8 rounded-xl bg-white p-8 shadow">

          <h2 className="mb-6 text-2xl font-bold">
            Today's Timetable
          </h2>

          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b">
                <th className="p-3 text-left">Time</th>
                <th className="p-3 text-left">Course</th>
                <th className="p-3 text-left">Venue</th>
              </tr>
            </thead>

            <tbody>
              <tr className="border-b">
                <td className="p-3">08:00 - 10:00</td>
                <td className="p-3">CSC112</td>
                <td className="p-3">College Hall A</td>
              </tr>

              <tr className="border-b">
                <td className="p-3">11:00 - 01:00</td>
                <td className="p-3">GST111</td>
                <td className="p-3">Lecture Theatre 2</td>
              </tr>

              <tr>
                <td className="p-3">02:00 - 04:00</td>
                <td className="p-3">PHY111</td>
                <td className="p-3">Science Block</td>
              </tr>
            </tbody>
          </table>

        </div>

      </div>
    </div>
  );
}