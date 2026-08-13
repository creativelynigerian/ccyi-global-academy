import React from 'react';

function VideoPlayer({ title, videoUrl }) {
  return (
    <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
      <h4 className="font-semibold text-gray-800 text-lg mb-3">🎬 {title}</h4>
      <div className="relative pb-[56.25%] h-0 overflow-hidden rounded">
        <iframe
          src={videoUrl}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute top-0 left-0 w-full h-full border-0"
        />
      </div>
      
      {/* ADDED: The Training Suite Button */}
      <div className="mt-4 flex justify-center">
        <a 
          href="https://ccyiglobalentwebng.com.ng/lms" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 bg-yellow-500 hover:bg-yellow-600 text-white font-bold rounded-lg transition-colors shadow-md"
        >
          🚀 Go to Training Suite
        </a>
      </div>
    </div>
  );
}

export default VideoPlayer;