import React, { useState } from 'react';

function AccessModule() {
  const [progress, setProgress] = useState(0);
  const [currentLesson, setCurrentLesson] = useState(0);

  const lessons = [
    { title: 'Introduction to Databases', duration: '10 min' },
    { title: 'Creating Tables', duration: '15 min' },
    { title: 'Working with Queries', duration: '20 min' },
    { title: 'Forms and Reports', duration: '20 min' },
    { title: 'Relationships and Data Integrity', duration: '20 min' },
    { title: 'Final Project', duration: '25 min' },
  ];

  const handleStartLesson = () => {
    if (currentLesson < lessons.length) {
      setProgress(Math.round(((currentLesson + 1) / lessons.length) * 100));
      setCurrentLesson(currentLesson + 1);
    }
  };

  return (
    <div className="module-container">
      <div className="module-header">
        <h2>🗄️ Microsoft Access</h2>
        <p>Build and manage databases for data-driven applications</p>
        <div className="progress-section">
          <div className="progress-bar">
            <div className="progress-fill" style={{ width: `${progress}%` }}></div>
          </div>
          <span className="progress-text">{progress}% Complete</span>
        </div>
      </div>

      <div className="module-content">
        <div className="module-overview">
          <div className="overview-card">
            <h4>📚 Lessons</h4>
            <p>{lessons.length} lessons</p>
          </div>
          <div className="overview-card">
            <h4>⏱️ Total Duration</h4>
            <p>~2 hours</p>
          </div>
          <div className="overview-card">
            <h4>🎯 Level</h4>
            <p>Intermediate</p>
          </div>
        </div>

        <div className="lessons-list">
          <h3>Course Curriculum</h3>
          {lessons.map((lesson, index) => (
            <div 
              key={index} 
              className={`lesson-item ${index < currentLesson ? 'completed' : ''} ${index === currentLesson ? 'active' : ''}`}
            >
              <span className="lesson-status">
                {index < currentLesson ? '✅' : index === currentLesson ? '▶️' : '⏳'}
              </span>
              <span className="lesson-title">{lesson.title}</span>
              <span className="lesson-duration">{lesson.duration}</span>
            </div>
          ))}
        </div>

        <div className="module-actions">
          <button className="btn-primary" onClick={handleStartLesson}>
            {currentLesson >= lessons.length ? '🔄 Restart Course' : '▶️ Continue Learning'}
          </button>
          <button className="btn-secondary">📝 Download Resources</button>
        </div>
      </div>
    </div>
  );
}

export default AccessModule;
