import React from 'react';
import { Link } from 'react-router-dom';

function Certificate() {
  const certificateAwarded = localStorage.getItem('certificateAwarded') === 'true';
  const modules = JSON.parse(localStorage.getItem('trainingModules') || '[]');
  const completed = modules.filter(m => m.status === 'completed').length;
  const total = modules.length || 6;

  return (
    <div className="certificate-page">
      <Link to="/" className="back-link">? Back to Dashboard</Link>
      
      <div className="certificate-header">
        <h1>Certificate</h1>
        <p>Track your progress and earn your CU Learning Platform Certificate</p>
      </div>

      <div className="certificate-content">
        {certificateAwarded ? (
          <div className="certificate-awarded">
            <div className="certificate-badge">
              <span className="badge-icon"></span>
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
                {modules.map((module) => (
                  <li key={module.id}>
                    {module.status === 'completed' ? '?' : '?'} {module.title}
                  </li>
                ))}
              </ul>
              <Link to="/" className="continue-training-btn">Continue Training ?</Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Certificate;
