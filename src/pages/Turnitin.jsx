import React from "react";
import { Upload, FileText, Clock, CheckCircle } from "lucide-react";

export default function Turnitin() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="mx-auto max-w-6xl">

        {/* Header */}
        <div className="mb-8 rounded-xl bg-[#002147] p-8 text-white shadow-lg">
          <h1 className="text-4xl font-bold">Turnitin Assignment Centre</h1>
          <p className="mt-2 text-blue-200">
            Submit assignments securely and view similarity reports.
          </p>
        </div>

        {/* Statistics */}
        <div className="mb-8 grid gap-6 md:grid-cols-4">

          <div className="rounded-xl bg-white p-6 shadow">
            <FileText className="mb-3 text-blue-700" size={36} />
            <h2 className="text-3xl font-bold">12</h2>
            <p className="text-gray-600">Assignments</p>
          </div>

          <div className="rounded-xl bg-white p-6 shadow">
            <Upload className="mb-3 text-green-600" size={36} />
            <h2 className="text-3xl font-bold">8</h2>
            <p className="text-gray-600">Submitted</p>
          </div>

          <div className="rounded-xl bg-white p-6 shadow">
            <Clock className="mb-3 text-orange-500" size={36} />
            <h2 className="text-3xl font-bold">4</h2>
            <p className="text-gray-600">Pending</p>
          </div>

          <div className="rounded-xl bg-white p-6 shadow">
            <CheckCircle className="mb-3 text-purple-600" size={36} />
            <h2 className="text-3xl font-bold">96%</h2>
            <p className="text-gray-600">Completion</p>
          </div>

        </div>

        {/* Assignment Card */}
        <div className="rounded-xl bg-white p-8 shadow">

          <h2 className="mb-6 text-2xl font-bold">
            Current Assignment
          </h2>

          <div className="space-y-4">

            <div>
              <strong>Course</strong>
              <p>Introduction to Turnitin</p>
            </div>

            <div>
              <strong>Assignment</strong>
              <p>Essay on Academic Integrity</p>
            </div>

            <div>
              <strong>Deadline</strong>
              <p>30 July 2026</p>
            </div>

            <div>
              <strong>Status</strong>

              <span className="rounded-full bg-yellow-100 px-3 py-1 text-yellow-700">
                Pending Submission
              </span>
            </div>

          </div>

          {/* Upload Area */}

          <div className="mt-8 rounded-xl border-2 border-dashed border-blue-400 p-10 text-center">

            <Upload
              size={60}
              className="mx-auto mb-4 text-blue-600"
            />

            <h3 className="text-xl font-semibold">
              Upload Assignment
            </h3>

            <p className="mt-2 text-gray-500">
              Drag and drop your file here or click below.
            </p>

            <button
              className="mt-6 rounded-lg bg-blue-700 px-8 py-3 text-white hover:bg-blue-800"
            >
              Choose File
            </button>

          </div>

        </div>

      </div>
    </div>
  );
}