import React from 'react';
import { Link } from 'react-router-dom';

const officeModules = [
  { id: 'word', title: 'Microsoft Word', icon: '📄', description: 'Document creation and formatting', color: '#2b579a' },
  { id: 'excel', title: 'Microsoft Excel', icon: '📊', description: 'Spreadsheets and data analysis', color: '#217346' },
  { id: 'powerpoint', title: 'Microsoft PowerPoint', icon: '📽️', description: 'Presentations and slides', color: '#d24726' },
  { id: 'outlook', title: 'Microsoft Outlook', icon: '📧', description: 'Email and calendar management', color: '#0072c6' },
  { id: 'access', title: 'Microsoft Access', icon: '🗄️', description: 'Database management', color: '#a4373a' },
];

function OfficeSuite() {
  return (
    <div className="office-suite-page">
      <div className="page-header">
        <h2>📚 Microsoft Office Suite</h2>
        <p>Master all Microsoft Office applications with CCYI Global Academy</p>
      </div>

      <div className="modules-grid">
        {officeModules.map((module) => (
          <Link to={`/office-suite/${module.id}`} key={module.id} className="module-card" style={{ borderTop: `4px solid ${module.color}` }}>
            <div className="module-icon">{module.icon}</div>
            <h3>{module.title}</h3>
            <p>{module.description}</p>
            <span className="module-link">Start Learning →</span>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default OfficeSuite;
