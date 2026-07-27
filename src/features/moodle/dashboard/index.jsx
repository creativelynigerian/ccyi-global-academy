import React from 'react';

const downloadItems = [
  {
    id: 1,
    title: "Moodle Quick Start Guide",
    description: "PDF guide for getting started with Moodle",
    size: "2.4 MB",
    icon: "📄"
  },
  {
    id: 2,
    title: "Course Creation Checklist",
    description: "Checklist for creating a new training course",
    size: "1.1 MB",
    icon: "📋"
  },
  {
    id: 3,
    title: "Video Tutorials ZIP Bundle",
    description: "All video tutorials in one download",
    size: "45 MB",
    icon: "📦"
  }
];

const MoodleDownloads = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">📥 Downloads</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {downloadItems.map(item => (
          <div key={item.id} className="bg-white p-6 rounded-lg shadow hover:shadow-md transition">
            <div className="flex items-start gap-4">
              <span className="text-4xl">{item.icon}</span>
              <div className="flex-1">
                <h3 className="font-semibold text-gray-800">{item.title}</h3>
                <p className="text-gray-500 text-sm mt-1">{item.description}</p>
                <div className="flex justify-between items-center mt-3">
                  <span className="text-xs text-gray-400">{item.size}</span>
                  <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                    Download ↓
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MoodleDownloads;