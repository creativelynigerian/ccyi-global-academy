import React from 'react';
import { Link } from 'react-router-dom';

function Resources() {
  return (
    <div className="dashboard-page">
      <Link to="/" className="back-link">← Back to Dashboard</Link>
      
      <div className="dashboard-page-header" style={{ marginBottom: '24px' }}>
        <h2>📁 Learning Resources</h2>
        <p>Access study guides, e-books, and video tutorials for your courses.</p>
      </div>

      <div className="featured-section">
        <div className="section-header">
          <h3>Available Resources</h3>
        </div>
        
        <div style={{ padding: '40px 20px', textAlign: 'center' }}>
          <div style={{ fontSize: '64px', marginBottom: '16px' }}>📚</div>
          <h4 style={{ fontSize: '18px', color: '#0a1628', marginBottom: '8px' }}>Resource Library Coming Soon</h4>
          <p style={{ color: '#6b7280', maxWidth: '500px', margin: '0 auto' }}>
            We are currently curating a comprehensive library of study materials, 
            e-books, and video tutorials for all courses offered at CCYI Global Academy.
          </p>
          <div style={{ 
            display: 'inline-block', marginTop: '20px', padding: '10px 24px',
            background: '#f5b400', color: '#0a1628', borderRadius: '8px', fontWeight: '600'
          }}>
            🚧 Under Development
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resources;