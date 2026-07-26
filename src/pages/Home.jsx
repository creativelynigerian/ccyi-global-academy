// src/pages/Home.jsx
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#002147] via-blue-900 to-indigo-700 p-12 text-white shadow-xl">
        <div className="relative z-10 max-w-3xl">
          <h1 className="text-5xl font-bold leading-tight">
            Welcome to CU Onboarding
          </h1>
          <p className="mt-4 text-2xl text-blue-100">
            Your Digital Journey Starts Here
          </p>
          <p className="mt-5 text-lg text-blue-100/80 leading-relaxed">
            Covenant University's comprehensive onboarding portal helps you master 
            all the digital platforms you need for academic success.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              to="/dashboard"
              className="rounded-xl bg-yellow-400 px-8 py-3 font-semibold text-[#002147] transition hover:bg-yellow-300 hover:scale-105"
            >
              Get Started →
            </Link>
            <Link
              to="/about"
              className="rounded-xl bg-white/20 px-8 py-3 font-semibold text-white backdrop-blur-sm transition hover:bg-white/30 hover:scale-105"
            >
              Learn More
            </Link>
          </div>
        </div>
        {/* Decorative elements */}
        <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-yellow-400/20 blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-blue-400/20 blur-3xl"></div>
      </section>

      {/* Stats Section */}
      <section className="grid gap-6 md:grid-cols-4">
        <div className="rounded-xl bg-white p-6 shadow-md transition hover:shadow-lg">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-medium text-gray-500">Training Modules</h3>
            <span className="text-2xl">📚</span>
          </div>
          <p className="mt-2 text-3xl font-bold text-[#002147]">12</p>
          <p className="text-sm text-gray-500">Available courses</p>
        </div>
        <div className="rounded-xl bg-white p-6 shadow-md transition hover:shadow-lg">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-medium text-gray-500">Platforms</h3>
            <span className="text-2xl">💻</span>
          </div>
          <p className="mt-2 text-3xl font-bold text-[#002147]">8</p>
          <p className="text-sm text-gray-500">Digital tools</p>
        </div>
        <div className="rounded-xl bg-white p-6 shadow-md transition hover:shadow-lg">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-medium text-gray-500">Completed</h3>
            <span className="text-2xl">✅</span>
          </div>
          <p className="mt-2 text-3xl font-bold text-[#002147]">0</p>
          <p className="text-sm text-gray-500">Modules finished</p>
        </div>
        <div className="rounded-xl bg-white p-6 shadow-md transition hover:shadow-lg">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-medium text-gray-500">Progress</h3>
            <span className="text-2xl">📈</span>
          </div>
          <p className="mt-2 text-3xl font-bold text-[#002147]">0%</p>
          <p className="text-sm text-gray-500">Overall completion</p>
        </div>
      </section>

      {/* Quick Links Section */}
      <section>
        <h2 className="mb-6 text-2xl font-bold text-[#002147]">Quick Access</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <Link
            to="/moodle"
            className="group rounded-xl bg-white p-6 shadow-md transition hover:shadow-lg hover:scale-105"
          >
            <div className="flex items-center space-x-4">
              <span className="text-3xl">📚</span>
              <div>
                <h3 className="font-semibold text-[#002147]">Moodle</h3>
                <p className="text-sm text-gray-500">Access your courses</p>
              </div>
            </div>
          </Link>
          <Link
            to="/office365"
            className="group rounded-xl bg-white p-6 shadow-md transition hover:shadow-lg hover:scale-105"
          >
            <div className="flex items-center space-x-4">
              <span className="text-3xl">💼</span>
              <div>
                <h3 className="font-semibold text-[#002147]">Office 365</h3>
                <p className="text-sm text-gray-500">Email & collaboration</p>
              </div>
            </div>
          </Link>
          <Link
            to="/grammarly"
            className="group rounded-xl bg-white p-6 shadow-md transition hover:shadow-lg hover:scale-105"
          >
            <div className="flex items-center space-x-4">
              <span className="text-3xl">✍️</span>
              <div>
                <h3 className="font-semibold text-[#002147]">Grammarly</h3>
                <p className="text-sm text-gray-500">Writing assistant</p>
              </div>
            </div>
          </Link>
          <Link
            to="/turnitin"
            className="group rounded-xl bg-white p-6 shadow-md transition hover:shadow-lg hover:scale-105"
          >
            <div className="flex items-center space-x-4">
              <span className="text-3xl">🔍</span>
              <div>
                <h3 className="font-semibold text-[#002147]">Turnitin</h3>
                <p className="text-sm text-gray-500">Plagiarism check</p>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Getting Started Section */}
      <section className="rounded-2xl bg-gradient-to-r from-blue-50 to-indigo-50 p-8">
        <h2 className="mb-4 text-2xl font-bold text-[#002147]">
          🚀 Getting Started
        </h2>
        <div className="grid gap-4 md:grid-cols-3">
          <div className="flex items-start space-x-3">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#002147] text-white">
              1
            </span>
            <div>
              <h4 className="font-semibold">Access Your Dashboard</h4>
              <p className="text-sm text-gray-600">
                View your progress and available modules
              </p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#002147] text-white">
              2
            </span>
            <div>
              <h4 className="font-semibold">Complete Training Modules</h4>
              <p className="text-sm text-gray-600">
                Work through each platform tutorial
              </p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#002147] text-white">
              3
            </span>
            <div>
              <h4 className="font-semibold">Earn Your Certificate</h4>
              <p className="text-sm text-gray-600">
                Get certified upon completion
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}