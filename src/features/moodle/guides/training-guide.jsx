import React from 'react';

const TrainingGuide = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">📘 Moodle Training Guide</h1>
      
      <div className="space-y-6">
        <section className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-3">1. Getting Started</h2>
          <p className="text-gray-600">Learn how to log in, navigate the dashboard, and access your courses.</p>
          <ul className="mt-2 list-disc list-inside text-gray-600">
            <li>Logging in to Moodle</li>
            <li>Understanding the dashboard</li>
            <li>Accessing your courses</li>
          </ul>
        </section>

        <section className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-3">2. Creating a Course</h2>
          <p className="text-gray-600">Step-by-step guide to create a new training course.</p>
          <ol className="mt-2 list-decimal list-inside text-gray-600">
            <li>Click "Create New Training Course"</li>
            <li>Fill in course details</li>
            <li>Add content and resources</li>
            <li>Enroll students</li>
          </ol>
        </section>

        <section className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-3">3. Adding Content</h2>
          <p className="text-gray-600">Learn to add resources and activities.</p>
          <ul className="mt-2 list-disc list-inside text-gray-600">
            <li>Uploading files (PDFs, PPTs, videos)</li>
            <li>Creating quizzes</li>
            <li>Setting up assignments</li>
            <li>Adding discussion forums</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default TrainingGuide;