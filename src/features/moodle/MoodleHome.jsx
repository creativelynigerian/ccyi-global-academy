import React from 'react';

const MoodleHome = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-gray-800">📚 Moodle LMS</h1>
      <p className="text-gray-600 mt-2">Welcome to Moodle Learning Management System</p>
      
      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="font-semibold">Total Courses</h3>
          <p className="text-2xl font-bold text-blue-600">0</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="font-semibold">Students</h3>
          <p className="text-2xl font-bold text-green-600">0</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="font-semibold">Progress</h3>
          <p className="text-2xl font-bold text-yellow-600">0%</p>
        </div>
      </div>
    </div>
  );
};

export default MoodleHome;