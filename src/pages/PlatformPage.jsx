import React from 'react';
import { Link } from 'react-router-dom';

function PlatformPage({ title, icon, description, color, liveUrl }) {
  return (
    <div className="platform-page">
      <Link to="/" className="back-link">← Back to Dashboard</Link>
      
      <div className="platform-header" style={{ borderBottom: `4px solid ${color}` }}>
        <span className="platform-icon">{icon}</span>
        <h2>{title}</h2>
      </div>
      
      <div className="platform-content">
        <p>{description}</p>
        
        <div className="platform-placeholder">
          <p>📌 Welcome to the {title} training module.</p>
          <p>Complete this module to master {title} for your role at CCYI Global Academy.</p>
          
          <div className="platform-actions">
            <button className="btn-primary" onClick={() => alert('Starting training...')}>
              <i className="fas fa-play"></i> Start Training
            </button>
            
            {liveUrl && (
              <a 
                href={liveUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-live-platform"
              >
                <i className="fas fa-external-link-alt"></i> Access the Live Platform
              </a>
            )}
          </div>
        </div>
      </div>
      
      <footer className="app-footer">
        <div className="footer-content">
          <p>Powered by <strong>CCYI Global Enterprise</strong></p>
          <p className="footer-contact">
            <span>📞 <a href="tel:07018327654">07018327654</a></span>
            <span className="footer-separator">|</span>
            <span>📧 <a href="mailto:ceoccviye@gmail.com">ceoccviye@gmail.com</a></span>
          </p>
        </div>
      </footer>
    </div>
  );
}

export default PlatformPage;
