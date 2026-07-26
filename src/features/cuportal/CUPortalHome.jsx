import React from 'react';

const CUPortalHome = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">🏛️ CU Portal</h1>
      <p className="text-gray-600">Welcome to the Covenant University Portal.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
        <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition">
          <h3 className="font-semibold text-lg">Dashboard</h3>
          <p className="text-gray-500 text-sm mt-1">View your dashboard</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition">
          <h3 className="font-semibold text-lg">Assignments</h3>
          <p className="text-gray-500 text-sm mt-1">Manage your assignments</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition">
          <h3 className="font-semibold text-lg">Training</h3>
          <p className="text-gray-500 text-sm mt-1">Access training materials</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition">
          <h3 className="font-semibold text-lg">Videos</h3>
          <p className="text-gray-500 text-sm mt-1">Watch video lessons</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition">
          <h3 className="font-semibold text-lg">Downloads</h3>
          <p className="text-gray-500 text-sm mt-1">Download resources</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition">
          <h3 className="font-semibold text-lg">Support</h3>
          <p className="text-gray-500 text-sm mt-1">Get help and support</p>
        </div>
      </div>
    </div>
  );
};

export default CUPortalHome;