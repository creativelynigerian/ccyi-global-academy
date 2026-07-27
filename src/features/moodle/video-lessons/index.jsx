import React, { useState } from 'react';

const videoData = [
  {
    id: 1,
    title: "Introduction to Moodle",
    description: "Learn the basics of Moodle LMS platform",
    duration: "10:30",
    thumbnail: "🎬"
  },
  {
    id: 2,
    title: "Creating Your First Course",
    description: "Step-by-step course creation guide",
    duration: "15:20",
    thumbnail: "🎥"
  },
  {
    id: 3,
    title: "Managing Students and Grades",
    description: "Learn to manage enrollments and gradebook",
    duration: "12:45",
    thumbnail: "📹"
  },
  {
    id: 4,
    title: "Adding Resources and Activities",
    description: "Learn to add files, quizzes, and assignments",
    duration: "18:15",
    thumbnail: "🎓"
  }
];

const MoodleVideos = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">🎬 Video Lessons</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {videoData.map(video => (
          <div 
            key={video.id} 
            className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer"
            onClick={() => setSelectedVideo(video)}
          >
            <div className="bg-gray-200 h-48 rounded-t-lg flex items-center justify-center text-6xl">
              {video.thumbnail}
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-lg">{video.title}</h3>
              <p className="text-gray-500 text-sm mt-1">{video.description}</p>
              <div className="flex justify-between items-center mt-3">
                <span className="text-sm text-gray-400">{video.duration}</span>
                <span className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                  Watch Now →
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Video Modal */}
      {selectedVideo && (
        <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-3xl w-full">
            <div className="p-4 border-b flex justify-between items-center">
              <h3 className="text-xl font-bold">{selectedVideo.title}</h3>
              <button 
                onClick={() => setSelectedVideo(null)}
                className="text-gray-500 hover:text-gray-700 text-2xl"
              >
                ×
              </button>
            </div>
            <div className="p-4">
              <div className="bg-black aspect-video rounded flex items-center justify-center text-white text-6xl">
                ▶️
              </div>
              <p className="mt-4 text-gray-600">{selectedVideo.description}</p>
              <p className="text-sm text-gray-400 mt-2">Duration: {selectedVideo.duration}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MoodleVideos;