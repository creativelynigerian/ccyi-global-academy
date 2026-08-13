import React from 'react';
import { Link } from 'react-router-dom';

function Dashboard() {
  return (
    <div className="dashboard-page">
      <h2>🏛️ Welcome to CCYI Global Academy Portal</h2>
      <p>Student Learning and Registration Platform</p>
      
      <div className="featured-section">
        <div className="section-header">
          <h3>📚 Microsoft Office Suite</h3>
          <Link to="/office-suite" className="view-all">View All →</Link>
        </div>
        <div className="office-grid">
          {[
            { id: 'word', title: 'Word', icon: '📄', color: '#2b579a' },
            { id: 'excel', title: 'Excel', icon: '📊', color: '#217346' },
            { id: 'powerpoint', title: 'PowerPoint', icon: '📽️', color: '#d24726' },
            { id: 'outlook', title: 'Outlook', icon: '📧', color: '#0072c6' },
            { id: 'access', title: 'Access', icon: '🗄️', color: '#a4373a' },
          ].map((app) => (
            <Link to={`/office-suite/${app.id}`} key={app.id} className="office-card" style={{ borderTop: `4px solid ${app.color}` }}>
              <span className="office-icon">{app.icon}</span>
              <span className="office-title">{app.title}</span>
            </Link>
          ))}
        </div>
      </div>

      <div className="featured-section" style={{ marginTop: '24px' }}>
        <div className="section-header">
          <h3>🤖 AI Tools</h3>
          <Link to="/ai-tools" className="view-all">View All →</Link>
        </div>
        <div className="office-grid">
          {[
            { id: 'chatgpt', title: 'ChatGPT', icon: '💬', color: '#10a37f' },
            { id: 'canva', title: 'Canva', icon: '🎨', color: '#00c4cc' },
          ].map((tool) => (
            <Link to={`/ai-tools/${tool.id}`} key={tool.id} className="office-card" style={{ borderTop: `4px solid ${tool.color}` }}>
              <span className="office-icon">{tool.icon}</span>
              <span className="office-title">{tool.title}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
