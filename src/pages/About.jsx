// src/pages/About.jsx
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#002147] via-blue-900 to-indigo-700 p-12 text-white shadow-xl">
        <div className="relative z-10 max-w-3xl">
          <h1 className="text-5xl font-bold leading-tight">About CU Onboarding</h1>
          <p className="mt-4 text-2xl text-blue-100">
            Empowering Your Digital Academic Journey
          </p>
          <p className="mt-5 text-lg text-blue-100/80 leading-relaxed">
            Covenant University's Digital Onboarding Portal is designed to help 
            students and faculty seamlessly integrate with the university's 
            digital ecosystem.
          </p>
        </div>
        {/* Decorative elements */}
        <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-yellow-400/20 blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-blue-400/20 blur-3xl"></div>
      </section>

      {/* Mission & Vision */}
      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-xl bg-white p-8 shadow-md transition hover:shadow-lg">
          <div className="mb-4 text-4xl">🎯</div>
          <h3 className="mb-2 text-xl font-bold text-[#002147]">Our Mission</h3>
          <p className="text-gray-600 leading-relaxed">
            To provide a seamless digital onboarding experience that equips every 
            Covenant University student and faculty member with the essential 
            digital skills and tools for academic excellence.
          </p>
        </div>
        <div className="rounded-xl bg-white p-8 shadow-md transition hover:shadow-lg">
          <div className="mb-4 text-4xl">👁️</div>
          <h3 className="mb-2 text-xl font-bold text-[#002147]">Our Vision</h3>
          <p className="text-gray-600 leading-relaxed">
            To be the leading digital onboarding platform in African higher 
            education, fostering technological proficiency and academic innovation 
            across all disciplines.
          </p>
        </div>
      </div>

      {/* Core Values */}
      <section>
        <h2 className="mb-6 text-2xl font-bold text-[#002147]">Core Values</h2>
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-xl bg-white p-6 shadow-md transition hover:shadow-lg">
            <div className="mb-3 text-3xl">💡</div>
            <h4 className="mb-2 font-semibold text-[#002147]">Excellence</h4>
            <p className="text-sm text-gray-600">
              Commitment to providing high-quality digital learning experiences.
            </p>
          </div>
          <div className="rounded-xl bg-white p-6 shadow-md transition hover:shadow-lg">
            <div className="mb-3 text-3xl">🤝</div>
            <h4 className="mb-2 font-semibold text-[#002147]">Collaboration</h4>
            <p className="text-sm text-gray-600">
              Fostering a community of learners and educators working together.
            </p>
          </div>
          <div className="rounded-xl bg-white p-6 shadow-md transition hover:shadow-lg">
            <div className="mb-3 text-3xl">🚀</div>
            <h4 className="mb-2 font-semibold text-[#002147]">Innovation</h4>
            <p className="text-sm text-gray-600">
              Embracing new technologies and approaches to digital education.
            </p>
          </div>
        </div>
      </section>

      {/* Platforms Overview */}
      <section>
        <h2 className="mb-6 text-2xl font-bold text-[#002147]">Platforms We Cover</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <div className="flex items-center space-x-3 rounded-xl bg-white p-4 shadow-md">
            <span className="text-2xl">📚</span>
            <div>
              <h4 className="font-semibold text-[#002147]">Moodle</h4>
              <p className="text-sm text-gray-500">Learning Management System</p>
            </div>
          </div>
          <div className="flex items-center space-x-3 rounded-xl bg-white p-4 shadow-md">
            <span className="text-2xl">💼</span>
            <div>
              <h4 className="font-semibold text-[#002147]">Office 365</h4>
              <p className="text-sm text-gray-500">Email & Collaboration</p>
            </div>
          </div>
          <div className="flex items-center space-x-3 rounded-xl bg-white p-4 shadow-md">
            <span className="text-2xl">✍️</span>
            <div>
              <h4 className="font-semibold text-[#002147]">Grammarly</h4>
              <p className="text-sm text-gray-500">Writing Assistant</p>
            </div>
          </div>
          <div className="flex items-center space-x-3 rounded-xl bg-white p-4 shadow-md">
            <span className="text-2xl">🔍</span>
            <div>
              <h4 className="font-semibold text-[#002147]">Turnitin</h4>
              <p className="text-sm text-gray-500">Plagiarism Detection</p>
            </div>
          </div>
          <div className="flex items-center space-x-3 rounded-xl bg-white p-4 shadow-md">
            <span className="text-2xl">🌐</span>
            <div>
              <h4 className="font-semibold text-[#002147]">Internet Login</h4>
              <p className="text-sm text-gray-500">Campus Network Access</p>
            </div>
          </div>
          <div className="flex items-center space-x-3 rounded-xl bg-white p-4 shadow-md">
            <span className="text-2xl">🎓</span>
            <div>
              <h4 className="font-semibold text-[#002147]">Certificate</h4>
              <p className="text-sm text-gray-500">Certification Program</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="rounded-2xl bg-gradient-to-r from-[#002147] to-blue-900 p-8 text-center text-white">
        <h2 className="text-2xl font-bold">Ready to Get Started?</h2>
        <p className="mt-2 text-blue-100">
          Begin your digital onboarding journey today.
        </p>
        <Link
          to="/dashboard"
          className="mt-4 inline-block rounded-xl bg-yellow-400 px-8 py-3 font-semibold text-[#002147] transition hover:bg-yellow-300"
        >
          Go to Dashboard →
        </Link>
      </section>
    </div>
  );
}