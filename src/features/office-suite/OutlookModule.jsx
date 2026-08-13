import React, { useState } from 'react';

function OutlookModule() {
  const [progress, setProgress] = useState(0);
  const [currentLesson, setCurrentLesson] = useState(0);

  const lessons = [
    { title: 'Introduction to Outlook', duration: '10 min' },
    { title: 'Managing Emails', duration: '15 min' },
    { title: 'Calendar and Scheduling', duration: '15 min' },
    { title: 'Contacts and Tasks', duration: '15 min' },
    { title: 'Advanced Email Management', duration: '20 min' },
    { title: 'Collaboration Tools', duration: '15 min' },
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
        <h2>📧 Microsoft Outlook</h2>
        <p>Manage emails, calendars, and tasks professionally</p>
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
            <p>~1.5 hours</p>
          </div>
          <div className="overview-card">
            <h4>🎯 Level</h4>
            <p>Beginner</p>
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

export default OutlookModule;
