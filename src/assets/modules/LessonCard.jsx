import React from 'react';

function LessonCard({ title, content }) {
  return (
    <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
      <h4 className="font-semibold text-gray-800 text-lg mb-2">{title}</h4>
      <p className="text-gray-600 text-sm leading-relaxed">{content}</p>
    </div>
  );
}

export default LessonCard;
