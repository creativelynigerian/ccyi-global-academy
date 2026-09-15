import React from 'react';
import { Link } from 'react-router-dom';

function Certificate() {
  const certificateAwarded = localStorage.getItem('certificateAwarded') === 'true';
  const modules = JSON.parse(localStorage.getItem('trainingModules') || '[]');
  
  // If modules are empty, we assume the student hasn't started. 
  // To prevent a 0/6 showing incorrectly, we check if modules exist.
  const completed = modules.filter(m => m.status === 'completed').length;
  const total = modules.length > 0 ? modules.length : 6; 

  return (
    <div className="certificate-page">
      <Link to="/" className="back-link">← Back to Dashboard</Link>
      
      <div className="certificate-header">
        <h1>🎓 Certificate</h1>
        <p>Track your progress and earn your CCYI Global Academy Certificate</p>
      </div>

      <div className="certificate-content">
        {certificateAwarded ? (
          <div className="certificate-awarded">
            <div className="certificate-badge">
              <div style={{ fontSize: '64px' }}>🏆</div>
              <h2>Certificate Awarded!</h2>
              <p>Congratulations! You have successfully completed all training modules.</p>
              <button className="download-cert-btn" onClick={() => alert('Downloading your certificate...')}>
                Download Certificate (PDF)
              </button>
            </div>
          </div>
        ) : (
          <div className="certificate-progress">
            <div className="progress-info">
              <h3>Your Progress</h3>
              <p>Complete all six training modules to earn your certificate.</p>
              <div className="cert-progress-bar">
                <div className="cert-progress-fill" style={{ width: `${(completed/total)*100}%` }}></div>
              </div>
              <p className="cert-progress-text">{completed} / {total} modules completed</p>
            </div>
            <div className="cert-checklist">
              <h4>Required Modules:</h4>
              <ul>
                {modules.length > 0 ? (
                  modules.map((module) => (
                    <li key={module.id}>
                      {module.status === 'completed' ? '✅' : '⬜'} {module.title}
                    </li>
                  ))
                ) : (
                  <li style={{ color: '#9ca3af' }}>No modules started yet.</li>
                )}
              </ul>
              <Link to="/" className="continue-training-btn">Continue Training →</Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Certificate;