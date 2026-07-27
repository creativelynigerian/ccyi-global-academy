import React from 'react';
import { Link } from 'react-router-dom';

function PlatformPage({ title, icon, description, color }) {
  return (
    <div className="platform-page">
      <Link to="/" className="back-link">? Back to Dashboard</Link>
      
      <div className="platform-header" style={{ borderBottom: `4px solid ${color}` }}>
        <span className="platform-icon">{icon}</span>
        <h2>{title}</h2>
      </div>
      
      <div className="platform-content">
        <p>{description}</p>
        
        <div className="platform-placeholder">
          <p>?? Welcome to the {title} training module.</p>
          <p>Complete this module to master {title} for your role at CCYI Global Academy.</p>
          <button className="btn-primary">Start Training ?</button>
        </div>
      </div>
    </div>
  );
}

export default PlatformPage;
