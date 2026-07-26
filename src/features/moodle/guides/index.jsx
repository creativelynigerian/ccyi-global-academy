import React from 'react';

const MoodleGuides = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">📘 Training Guides</h1>
      <div className="grid gap-4">
        <div className="bg-white p-6 rounded-lg shadow border-l-4 border-blue-500">
          <h3 className="text-xl font-semibold">Getting Started with Moodle</h3>
          <p className="text-gray-600 mt-2">Learn how to log in, navigate, and manage your courses.</p>
          <button className="mt-3 text-blue-600 hover:text-blue-800">Read Guide →</button>
        </div>
        <div className="bg-white p-6 rounded-lg shadow border-l-4 border-green-500">
          <h3 className="text-xl font-semibold">Creating Your First Course</h3>
          <p className="text-gray-600 mt-2">Step-by-step guide to create a new training course.</p>
          <button className="mt-3 text-blue-600 hover:text-blue-800">Read Guide →</button>
        </div>
        <div className="bg-white p-6 rounded-lg shadow border-l-4 border-purple-500">
          <h3 className="text-xl font-semibold">Adding Content & Activities</h3>
          <p className="text-gray-600 mt-2">Learn to add resources, quizzes, and assignments.</p>
          <button className="mt-3 text-blue-600 hover:text-blue-800">Read Guide →</button>
        </div>
        <div className="bg-white p-6 rounded-lg shadow border-l-4 border-orange-500">
          <h3 className="text-xl font-semibold">Grading and Assessment</h3>
          <p className="text-gray-600 mt-2">Learn how to grade assignments and manage the gradebook.</p>
          <button className="mt-3 text-blue-600 hover:text-blue-800">Read Guide →</button>
        </div>
      </div>
    </div>
  );
};

export default MoodleGuides;